import React, { useEffect, useState } from 'react';
import './admin_product.css';
import { Dropdown, Space, Input, Upload, message, Button, Spin } from 'antd';
import { DownOutlined, InboxOutlined } from '@ant-design/icons';
import {$API, $authHost} from '../../../utils/http.jsx';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";

const AdminProduct = () => {
    const [state, setState] = useState({
        selectedCategory: null,
        selectedSubCategory: null,
        infoUz: '',
        infoRu: '',
        productNameUz: '',
        productNameRu: '',
        productPrice: '',
        propertiesUz: '',
        propertiesRu: '',
        uploadedFiles: [],
    });
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState({
        category: false,
        subCategory: false,
    });
    const [loading, setLoading] = useState(false);

    const toolbarOpt = ['blockquote', 'bold', 'italic', 'underline', 'strike', 'link'];
    const { Dragger } = Upload;

    // Kategoriyalarni olish
    const getCategory = async () => {
        try {
            const res = await $API.get('/admin-api/category-list/');
            setCategory(res.data.results);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    // Tanlangan kategoriya bo'yicha sub-kategoriyalarni olish
    const getSubCategory = async (categoryId) => {
        try {
            const res = await $API.get(`/admin-api/subcategory-by-category/${categoryId}/`);
            setSubCategory(res.data.results);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    const props = {
        name: 'file',
        multiple: true,
        beforeUpload: (file) => {
            setState(prevState => ({
                ...prevState,
                uploadedFiles: [...prevState.uploadedFiles, file]
            }));
            return false; // Fayllarni avtomatik yuklashni to'xtatish
        },
        onRemove: (file) => {
            setState(prevState => ({
                ...prevState,
                uploadedFiles: prevState.uploadedFiles.filter(f => f.uid !== file.uid)
            }));
        },
    };

    // Kategoriyani tanlaganda sub-kategoriyalarni yangilash
    const handleCategorySelect = (category) => {
        setState(prevState => ({
            ...prevState,
            selectedCategory: category
        }));
        setDropdownVisible(prevState => ({
            ...prevState,
            category: false, // Tanlangandan keyin dropdownni yopish
        }));
        getSubCategory(category.id);
    };

    // Sub-kategoriyani tanlash
    const handleSubCategorySelect = (subCategory) => {
        setState(prevState => ({
            ...prevState,
            selectedSubCategory: subCategory
        }));
        setDropdownVisible(prevState => ({
            ...prevState,
            subCategory: false, // Tanlangandan keyin dropdownni yopish
        }));
    };
    const postProduct = async () => {
        if (!state.productNameUz || !state.productNameRu || !state.selectedCategory || !state.productPrice) {
            message.error('Barcha maydonlarni to\'ldiring!');
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            // 1. Fayllarni alohida yuklash
            const uploadedMediaIds = [];
            for (let file of state.uploadedFiles) {
                const mediaFormData = new FormData();
                mediaFormData.append('product_name', state.productNameUz); // yoki boshqa nom
                mediaFormData.append('file', file);

                const mediaRes = await $authHost.post('/admin-api/media-create/', mediaFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(mediaRes)
                uploadedMediaIds.push(mediaRes.data.id); // yuklangan fayl id sini saqlash
            }
            console.log(uploadedMediaIds)
            // 2. Mahsulot yaratish
            const formData = new FormData();
            formData.append('name', state.productNameUz);
            formData.append('nameRU', state.productNameRu);
            formData.append('category', state.selectedCategory.id);
            formData.append('subcategory', state.selectedSubCategory.category);
            formData.append('price', state.productPrice);
            formData.append('infoUZ', state.infoUz);
            formData.append('infoRU', state.infoRu);
            formData.append('propertiesUz', state.propertiesUz);
            formData.append('propertiesRU', state.propertiesRu);
            uploadedMediaIds.forEach(id => {
                formData.append('photos_or_videos', id); // media id larni qo'shish
            });

            await $authHost.post('/admin-api/product-create/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',

                },
            });

            message.success('Mahsulot muvaffaqiyatli yaratildi!');
        } catch (e) {
            console.log(e);
            message.error('Mahsulotni yaratishda xatolik yuz berdi!');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="admin-product">
            <div className="category_product">
                <h1>Создание товара</h1>

                <label>Категория товара *</label>
                <Dropdown
                    className={'category_product_item'}
                    trigger={["click"]}
                    visible={dropdownVisible.category}
                    onVisibleChange={(flag) => setDropdownVisible(prevState => ({ ...prevState, category: flag }))}
                    overlay={
                        <div className="dropdown-menu">
                            {category.map((cat) => (
                                <a key={cat.id} onClick={() => handleCategorySelect(cat)}>
                                    {cat.name}
                                </a>
                            ))}
                        </div>
                    }
                >
                    <a onClick={(e) => e.preventDefault()}>
                        {state.selectedCategory ? state.selectedCategory.name : 'Выбрать категорию'} <DownOutlined/>
                    </a>
                </Dropdown>

                {state.selectedCategory && (
                    <div style={{ marginTop: "15px" }}>
                        <label>Подкатегория товара *</label>
                        <Dropdown
                            className={"category_product_item"}
                            trigger={["click"]}
                            visible={dropdownVisible.subCategory}
                            onVisibleChange={(flag) => setDropdownVisible(prevState => ({ ...prevState, subCategory: flag }))}
                            overlay={
                                <div className="dropdown-menu">
                                    {subCategory.map((sub) => (
                                        <a key={sub.id} onClick={() => handleSubCategorySelect(sub)}>
                                            {sub.name}
                                        </a>
                                    ))}
                                </div>
                            }
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                {state.selectedSubCategory ? state.selectedSubCategory.name : 'Выбрать подкатегорию'}
                                <DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                )}
            </div>

            <div className="product_content_name">
                <label>Название товара на Узбекском *</label>
                <Input maxLength={90} value={state.productNameUz} onChange={(e) => setState(prevState => ({ ...prevState, productNameUz: e.target.value }))}
                       placeholder="Точное название товара" className="product_input" disabled={loading}/>

                <label>Название товара на Русском *</label>
                <Input maxLength={90} value={state.productNameRu} onChange={(e) => setState(prevState => ({ ...prevState, productNameRu: e.target.value }))}
                       placeholder="Точное название товара" className="product_input" disabled={loading}/>

                <label>Price *</label>
                <Input maxLength={90} value={state.productPrice} onChange={(e) => setState(prevState => ({ ...prevState, productPrice: e.target.value }))}
                       placeholder="Цена товара" className="product_input" disabled={loading}/>
            </div>

            <div className="product_content_info">
                <label>Описание товара на Узбекском *</label>
                <ReactQuill theme="snow"
                            modules={{ toolbar: toolbarOpt }}
                            value={state.infoUz} onChange={(value) => setState(prevState => ({ ...prevState, infoUz: value }))}
                            className={"product_content_info_item"} readOnly={loading}/>
                <label>Описание товара на Русском *</label>
                <ReactQuill theme="snow"
                            modules={{ toolbar: toolbarOpt }}
                            value={state.infoRu} onChange={(value) => setState(prevState => ({ ...prevState, infoRu: value }))}
                            className={"product_content_info_item"} readOnly={loading}/>
            </div>

            <div className="product_content_properties">
                <div className="properties">
                    <label>свойства товара на Узбекском *</label>
                    <Input maxLength={90} value={state.propertiesUz} onChange={(e) => setState(prevState => ({ ...prevState, propertiesUz: e.target.value }))}
                           placeholder="свойства товара" className="product_input" disabled={loading}/>
                </div>

                <div className="properties">
                    <label>свойства товара на Русском *</label>
                    <Input maxLength={90} value={state.propertiesRu} onChange={(e) => setState(prevState => ({ ...prevState, propertiesRu: e.target.value }))}
                           placeholder="свойства товара" className="product_input properties" disabled={loading}/>
                </div>
            </div>

            <div className="product_photo_content">
                <Spin spinning={loading}>
                    <Dragger {...props} disabled={loading}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Выберите файл или перетащите сюда</p>
                        <p className="ant-upload-hint">
                            Поддерживает расширения .jpg, .jpeg, .png, .webp, .svg
                        </p>
                    </Dragger>
                </Spin>
            </div>

            <div className="save_product_btn">
                <Button type="primary" onClick={postProduct} disabled={loading}>Создать</Button>
            </div>
        </div>
    );
};

export default AdminProduct;

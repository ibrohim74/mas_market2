import AdminLayout from "../../pages/admin_page/layout/admin_layout.jsx";
import AdminProduct from "../../pages/admin_page/admin_product/admin_product.jsx";
import Home from "../../pages/Home/Home.jsx";
import Login from "../../pages/login/login.jsx";
import Category from "../../pages/admin_page/category/category.jsx";
import Product_page from "../../pages/product_page/product_page.jsx";
import Category_page from "../../pages/Category_page/category_page.jsx";
import Basket_page from "../../pages/basket/basket_page.jsx";
import Checkout from "../../pages/basket/checkout.jsx";

export const HOME = "/"
export const CATEGORY_PAGE = "/category/:categoryId";
export const CATEGORY_PAGE_SOLO = "/category";
export const PRODUCT_PAGE = "/product/:productId"
export const BASKET_PAGE = "/basket";
export const CHECKOUT = "/checkout";

export const ADMIN_DASHBOARD = "Administrator/"
export const ADMIN_PRODUCTS = "Administrator_product"
export const ADMIN_CATEGORY = "Administrator_category"
export const LOGIN = "Login"

export const Admin = [
    {
        Path:ADMIN_DASHBOARD,
        Component: <AdminLayout/>
    },
    {
        Path:ADMIN_PRODUCTS,
        Component: <AdminProduct/>
    },
    {
        Path:ADMIN_CATEGORY,
        Component: <Category/>
    },
]
export const Public_router = [
    {
        Path:HOME,
        Component: <Home/>
    },
    {
        Path:LOGIN,
        Component: <Login/>
    },
    {
        Path:PRODUCT_PAGE,
        Component: <Product_page/>
    },
    {
        Path:CATEGORY_PAGE,
        Component: <Category_page/>
    },
    {
        Path:CATEGORY_PAGE_SOLO,
        Component: <Category_page/>
    },
    {
        Path:BASKET_PAGE,
        Component: <Basket_page/>
    },
    {
        Path:CHECKOUT,
        Component: <Checkout/>
    },

]
import AdminLayout from "../../pages/admin_page/layout/admin_layout.jsx";
import AdminProduct from "../../pages/admin_page/admin_product/admin_product.jsx";
import Home from "../../pages/Home/Home.jsx";
import Login from "../../pages/login/login.jsx";
import Category from "../../pages/admin_page/category/category.jsx";

export const HOME = "/"

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
]
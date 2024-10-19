import React from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Admin, ADMIN_DASHBOARD, Public_router} from "./utils/const/consts.jsx";
import AdminLayout from "./pages/admin_page/layout/admin_layout.jsx";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${ADMIN_DASHBOARD}/*`} element={<AdminLayout/>} />
                {Public_router.map(({Path,Component} , index)=>
                    (<Route key={index} path={Path} element={Component}/>)
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
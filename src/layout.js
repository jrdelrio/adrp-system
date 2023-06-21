import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { ClientsListView } from "./views/clients.jsx";
import injectContext from "./store/appContext.js";
import { ProductsListView } from "./views/products.jsx";
import { SalesListView } from "./views/sales";
import LoginView from "./views/login";

const Layout = () => {
    return (
<BrowserRouter>
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ClientsListView />} path='/clients'/>
        <Route element={<ProductsListView />} path='/products'/>
        <Route element={<SalesListView />} path='/sales'/>
        <Route element={<LoginView />} path='/login'/>
    </Routes>
</BrowserRouter>
    )
};

export default injectContext(Layout);

{/* <Route element={<Single />} path='/clients/single/:id'/> */}
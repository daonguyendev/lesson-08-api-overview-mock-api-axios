import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import ProductView from "../components/main/product/ProductView";
import ProductAdd from "../components/main/product/ProductAdd";
import ProductEdit from "../components/main/product/ProductEdit";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />}>
        <Route path="women" element={<ProductPage />} />
        <Route path="men" element={<ProductPage />} />
      </Route>

      <Route path="/product/view/:id" element={<ProductView />} />
      <Route path="/product/add" element={<ProductAdd />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;

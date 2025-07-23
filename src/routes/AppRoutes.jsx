import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WomenPage from "../pages/product/WomenPage";
import MenPage from "../pages/product/MenPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage productType="all" />}>
        <Route path="women" element={<ProductPage productType="women" />} />
        <Route path="men" element={<ProductPage productType="men" />} />
      </Route>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;

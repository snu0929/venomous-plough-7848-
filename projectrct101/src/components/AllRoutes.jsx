
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import SingleProductPage from "./SingleProductPage";
import Main from './Main'
import Cart from "./Cart";



function AllRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:productId" element={<SingleProductPage/>} />
      </Routes>
  );
}

export default AllRoutes;

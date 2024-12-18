import React from "react";
import Navbar from "./Components/Navbar/Navbar"; // Adjust the path to match your structure
import HeroShop from "./Components/HeroShop/HeroShop";
import ProductGallery from "./ProductGallery/ProductGallery";
import Image from "../Shop/Image/Image";
import Footer from "../Shop/Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import RoadBikes from "./Pages/Road";
import ElectricBikes from "./Pages/Electric";
import GravelBikes from "./Pages/Gravel";
import KidsBikes from "./Pages/Kids";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <HeroShop />
      <ProductGallery />
      <Image />
      <Footer />
      <Routes>
        <Route path="/roadbikes" element={<RoadBikes />} />
        <Route path="/gravelbikes" element={<GravelBikes />} />
        <Route path="/electricbikes" element={<ElectricBikes />} />
        <Route path="/kidsbikes" element={<KidsBikes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default Shop;

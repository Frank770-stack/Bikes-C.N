import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Content from "./Components/Content/Part";
import NewArrivals from "./Components/NewArrivals/NewArrival";
import Shop from "./Shop/Shop";
import Road from "../src/Pages/Road";
import Gravel from "../src/Pages/Gravel";
import Electric from "../src/Pages/Electric";
import Kids from "../src/Pages/Kids";
import RoadBikes from "../src/Shop/Pages/Road";
import GravelBikes from "../src/Shop/Pages/Gravel";
import ElectricBikes from "../src/Shop/Pages/Electric";
import Cart from "../src/Shop/Pages/Cart";
import KidsBikes from "../src/Shop/Pages/Kids";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Checkout from "../src/Shop/Pages/Checkout";
import LoginSignup from "../src/Shop/Pages/LoginSignup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Content />
              <NewArrivals />
              <Footer />
            </>
          }
        />
        <Route path="/road" element={<Road />} />
        <Route path="/gravel" element={<Gravel />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="shop/roadbikes" element={<RoadBikes />} />
        <Route path="shop/gravelbikes" element={<GravelBikes />} />
        <Route path="shop/electricbikes" element={<ElectricBikes />} />
        <Route path="shop/kidsbikes" element={<KidsBikes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;

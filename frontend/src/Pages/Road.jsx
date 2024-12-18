import React from "react";
import "./CSS/Pages.css";
import { useNavigate } from "react-router-dom";

function Road() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Road Bikes</h1>
        <p>Speed, Performance, and Comfort</p>
      </div>
      <div className="category-text">
        <p>
          Road bikes are designed for high-speed cycling on paved roads. They
          offer lightweight frames and efficient gearing systems, ideal for
          racing or long-distance riding. Whether you're a seasoned racer or
          someone looking to get into cycling, our road bikes will help you
          conquer any challenge.
        </p>
        <button className="explore-button" onClick={() => navigate("/shop")}>
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Road;

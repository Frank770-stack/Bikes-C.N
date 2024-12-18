import React from "react";
import "./CSS/Pages.css";
import { useNavigate } from "react-router-dom";

function Electric() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Electric Bikes</h1>
        <p>Power, Comfort, and Efficiency</p>
      </div>
      <div className="category-text">
        <p>
          Electric bikes (e-bikes) combine the freedom of cycling with the power
          of a motor. Perfect for commuting, leisurely rides, or tackling
          difficult hills, these bikes offer an effortless experience with pedal
          assist or full throttle control. With different styles, including city
          and mountain e-bikes, you'll enjoy the ride without breaking a sweat.
        </p>
        <button className="explore-button" onClick={() => navigate("/shop")}>
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Electric;

import React from "react";
import "./CSS/Pages.css";
import { useNavigate } from "react-router-dom";

function Gravel() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Gravel Bikes</h1>
        <p>Adventure, Durability, and Versatility</p>
      </div>
      <div className="category-text">
        <p>
          Gravel bikes are built to tackle rough terrain and diverse riding
          conditions. With wider tires, stable geometry, and versatile gearing,
          they excel in both off-road and paved paths. Whether you're riding
          through gravel roads, dirt trails, or mixed surfaces, these bikes are
          designed for adventure seekers who love to explore the unknown.
        </p>
        <button className="explore-button" onClick={() => navigate("/shop")}>
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Gravel;

import React from "react";
import "./CSS/Pages.css";
import { useNavigate } from "react-router-dom";

function Kids() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="category-header">
        <h1>Kids Bikes</h1>
        <p>Fun, Safety, and Learning</p>
      </div>
      <div className="category-text">
        <p>
          Kids bikes are designed for comfort, safety, and fun. Whether your
          little one is learning to ride or ready for an adventure, our
          selection of bikes is perfect for children of all ages. With training
          wheels, adjustable seats, and colorful designs, these bikes help
          foster confidence and balance while ensuring safety at every turn.
        </p>
        <button className="explore-button" onClick={() => navigate("/shop")}>
          Explore Products
        </button>
      </div>
    </div>
  );
}

export default Kids;

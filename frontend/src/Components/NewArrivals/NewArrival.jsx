import React from "react";
import "./NewArrival.css";
import newArrivalImage from "../Assets/New.jpg";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
  const navigate = useNavigate();
  return (
    <section className="new-arrivals">
      <div className="new-arrivals-content">
        <h2>New Arrivals</h2>
        <p>
          Check out our latest collection of bikes designed for performance,
          comfort, and style. Don't miss out!
        </p>
        <button className="explore-button" onClick={() => navigate("/shop")}>
          See What's New
        </button>
      </div>
      <div className="new-arrivals-image">
        <img src={newArrivalImage} alt="New Arrival Bike" />
      </div>
    </section>
  );
}

export default NewArrivals;

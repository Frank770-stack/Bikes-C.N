import React from "react";
import "./Part.css";
import leftImage from "../Assets/bike-left.jpg";
import rightImage from "../Assets/bike-right.jpg";
import { useNavigate } from "react-router-dom";

function Part() {
  const navigate = useNavigate();
  return (
    <section className="container">
      <div className="left-side">
        <img src={leftImage} alt="Left Side" />
        <h2>Make Your Move</h2>
        <p>All new checkmate SLR gravel race bike.</p>
        <button onClick={() => navigate("/shop")}>Shop Now</button>
      </div>
      <div className="right-side">
        <img src={rightImage} alt="Right Side" />
        <h2>Take the road less travelled. </h2>
        <p>All new checkpoint SL adventure gravel bike.</p>
        <button onClick={() => navigate("/shop")}>Shop Now</button>
      </div>
    </section>
  );
}

export default Part;

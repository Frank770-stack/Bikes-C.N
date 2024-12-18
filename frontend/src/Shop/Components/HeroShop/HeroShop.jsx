import React from "react";
import "./HeroShop.css";
// import Shophero from "../../Assets/Shophero.jpg";

const HeroShop = () => {
  return (
    <section className="heroshop">
      <div className="hero-image">
        {/* <img
          src={Shophero} // Replace with your image URL
          alt="Cycling"
        /> */}
        <div className="hero-content">
          <h1 className="hero-title">
            CYCLE
            <span className="hero-subtitle">TOWARDS A JOURNEY!!</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroShop;

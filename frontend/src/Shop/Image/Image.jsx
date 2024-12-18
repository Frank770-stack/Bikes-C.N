import React from "react";
import "./Image.css";
import Bike from "../Assets/Image.jpg";

const Image = () => {
  return (
    <div className="imagecontainer">
      <img src={Bike} alt="bike" />
    </div>
  );
};
export default Image;

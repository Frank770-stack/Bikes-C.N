import React, { useState, useEffect } from "react";
import "./Features.css";
import { useNavigate } from "react-router-dom";
// Example images (update with your actual image imports)
import featureImage1 from "../Assets/kev7.jpg";
import featureImage2 from "../Assets/kev6.jpg";
import featureImage3 from "../Assets/kev3.jpg";

function Features() {
  // Array of images
  const images = [featureImage1, featureImage2, featureImage3];

  // State to manage the current feature image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Index to track which image is currently being displayed
  const [imageIndex, setImageIndex] = useState(0);

  // Function to change the feature image based on the index
  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
  };

  // Set an interval to change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Set the current feature image based on the index
  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex]);

  const navigate = useNavigate();
  return (
    <section className="features">
      <div className="features-text">
        <h3>Home of Champions</h3>

        <button className="explore-button" onClick={() => navigate("/shop")}>
          Shop Mountain Bikes
        </button>
      </div>
      <div className="features-image">
        <img src={currentImage} alt="Feature" />
      </div>
    </section>
  );
}

export default Features;

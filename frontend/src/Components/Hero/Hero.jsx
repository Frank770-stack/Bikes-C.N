import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroImage1 from "../Assets/bike-hero.jpg";
import heroImage2 from "../Assets/hero2.jpg";
import heroImage3 from "../Assets/hero3.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  // State to manage the current hero image
  const [heroImage, setHeroImage] = useState(heroImage1);

  // Array of images
  const images = [heroImage1, heroImage2, heroImage3];

  // Index to track which image is currently being displayed
  const [imageIndex, setImageIndex] = useState(0);

  // Function to change the hero image based on the index
  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
  };

  // Set an interval to change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Set the current hero image based on the index
  useEffect(() => {
    setHeroImage(images[imageIndex]);
  }, [imageIndex]);

  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Two Wheels, Endless Possibilities!</h1>

        <button onClick={() => navigate("/shop")}>Explore Products</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Vanquish Comp Carbon Bike" />
      </div>
    </section>
  );
}

export default Hero;

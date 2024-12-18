import React, { useState } from "react";
import "./ProductGallery.css";

import Bikelock from "../Assets/Bikelock.jpg";
import Bottle from "../Assets/Bottle.jpg";
import Brake from "../Assets/Brake.jpg";
import Chain from "../Assets/Chain.jpg";
import City from "../Assets/City.jpg";
import Electricbike from "../Assets/Electricbike.jpg";
import Glasses from "../Assets/Glasses.jpg";
import Gloves from "../Assets/Gloves.jpg";
import Helmet from "../Assets/Helmet.jpg";
import Hybrid from "../Assets/Hybrid.jpg";
import Mountainbike from "../Assets/Mountainbike.jpg";
import Pedals from "../Assets/Pedals.jpg";
import Rack from "../Assets/Rack.jpg";
import Repair from "../Assets/Repair.jpg";
import Roadbike from "../Assets/Roadbike.jpg";
import Seat from "../Assets/Seat.jpg";
import Shoes from "../Assets/Shoes.jpg";
import Tires from "../Assets/Tires.jpg";

import { useCart } from "../Context/Cartcontext.jsx"; // Import useCart

const ProductGallery = () => {
  const { addToCart } = useCart(); // Get addToCart from context

  const products = [
    {
      id: 1,
      name: "Mountain Bike X1",
      price: 500,
      description: "Durable mountain bike for off-road adventures.",
      image: Mountainbike,
    },
    {
      id: 2,
      name: "Road Bike Pro",
      price: 700,
      description: "High-performance road bike for speed and endurance.",
      image: Roadbike,
    },
    {
      id: 3,
      name: "Electric Bike E-Bike 2024",
      price: 120,
      description:
        "Electric-powered bike for easy commuting and eco-friendly rides.",
      image: Electricbike,
    },
    {
      id: 4,
      name: "Hybrid Bike A200",
      price: 350,
      description: "Versatile hybrid bike for both road and off-road cycling.",
      image: Hybrid,
    },
    {
      id: 5,
      name: "City Cruiser Bike",
      price: 400,
      description:
        "Comfortable bike designed for city commuting and casual rides.",
      image: City,
    },
    {
      id: 6,
      name: "Bike Helmet – VeloSafe",
      price: 500,
      description: "Stylish and protective helmet for safe cycling.",
      image: Helmet,
    },
    {
      id: 7,
      name: "Cycling Gloves – GripMaster",
      price: 250,
      description: "Comfortable gloves for a better grip and hand protection.",
      image: Gloves,
    },
    {
      id: 8,
      name: "Bike Pedals – PowerRide",
      price: 300,
      description: "Durable pedals for enhanced cycling performance.",
      image: Pedals,
    },
    {
      id: 9,
      name: "Bike Chain – SpeedLink",
      price: 400,
      description:
        "High-quality chain for smooth gear shifting and durability.",
      image: Chain,
    },
    {
      id: 10,
      name: "Bicycle Tires – AllTerrain Pro",
      price: 600,
      description: "Tires designed for both road and off-road cycling.",
      image: Tires,
    },
    {
      id: 11,
      name: "Bike Seat – ComfortRide",
      price: 450,
      description: "Ergonomically designed seat for a comfortable ride.",
      image: Seat,
    },
    {
      id: 12,
      name: "Bicycle Lock – SecurePro",
      price: 350,
      description: "Heavy-duty lock to keep your bike safe from theft.",
      image: Bikelock,
    },
    {
      id: 13,
      name: "Cycling Shoes – SpeedStep",
      price: 800,
      description: "Performance cycling shoes for efficient pedaling.",
      image: Shoes,
    },
    {
      id: 14,
      name: "Bike Repair Kit – FixIt",
      price: 200,
      description: "Compact repair kit for quick fixes on the go.",
      image: Repair,
    },
    {
      id: 15,
      name: "Water Bottle – HydratePro",
      price: 150,
      description: "Lightweight and durable water bottle for long rides.",
      image: Bottle,
    },
    {
      id: 16,
      name: "Cycling Sunglasses – ClearVision",
      price: 40,
      description: "Protective sunglasses for clear vision and eye safety.",
      image: Glasses,
    },
    {
      id: 17,
      name: "Shimano Brake Pads",
      price: 40,
      description: "Protective Brake Pads for safety while braking.",
      image: Brake,
    },
    {
      id: 18,
      name: "Bike Rack",
      price: 40,
      description: "Metallic Bike Rack for arranging Bikes.",
      image: Rack,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 6)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(products.length / 6)) %
        Math.ceil(products.length / 6)
    );
  };

  const displayedProducts = products.slice(
    currentIndex * 6,
    currentIndex * 6 + 6
  );

  return (
    <div className="slideshow-container">
      <div className="product-gallery">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="button-container">
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={handlePrev}>
          ❮
        </button>
        <button className="nav-button" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;

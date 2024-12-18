import React, { useState } from "react";
import axios from "axios";
import "./SignupLogin.css";

function SignUpLogin() {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Check password validity for signup
    if (activeTab === "signup" && !passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number."
      );
      return;
    }

    try {
      if (activeTab === "signup") {
        const response = await axios.post("http://localhost:5000/signup", {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        });
        alert(response.data.message);
      } else {
        const response = await axios.post("http://localhost:5000/login", {
          email: formData.email,
          password: formData.password,
        });
        alert(`Welcome, ${response.data.fullName}`);
        localStorage.setItem("token", response.data.token); // Save token to localStorage
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`tab ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="form-container">
        {activeTab === "login" ? (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-button">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUpLogin;

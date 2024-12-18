import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Update form data on input change
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login function
  const login = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        localStorage.setItem("auth-token", data);
        window.location.replace("/"); // Redirect to home page
      } else {
        setError("Login failed: " + data.message);
      }
    } catch (err) {
      setError("Error: Unable to reach the server.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Sign up function
  const signup = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          lastName: formData.lastName,
          firstName: formData.firstName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("auth-token", data);
        window.location.replace("/"); // Redirect to home page
      } else {
        setError("Sign Up failed: " + data.message);
      }
    } catch (err) {
      console.log(err);

      setError("Error: Unable to reach the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <>
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                placeholder="Username"
                required
              />
              <input
                name="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                placeholder="First Name"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={changeHandler}
                placeholder="Last Name"
                required
              />
            </>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="continue-button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Continue"}
        </button>
        {error && <p className="error-message">{error}</p>}
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

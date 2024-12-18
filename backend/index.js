// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/connectDB.js";
import { authRouter } from "./Route/auth.js";
// Load environment variables
dotenv.config();

connectDb(); // Connect to the database

// Initialize Express app
const app = express();
// Enable CORS - Allow communication with front-end
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Request received on root path");
  res.json({
    message: "Silence is golden",
  });
});

app.use("/auth", authRouter);

// END ROUTES
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

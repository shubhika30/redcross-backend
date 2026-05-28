const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const campRoutes = require("./routes/campRoutes");
const donorRoutes = require("./routes/donorRoutes");
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/camps", campRoutes);
app.use("/api/donors", donorRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Red Cross Backend Running");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
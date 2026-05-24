const express = require("express");
const router = express.Router();

const {
  createCamp,
  getCamps,
  updateCamp,
} = require("../controllers/campController");

// Create Camp
router.post("/create", createCamp);

// Get all Camps
router.get("/", getCamps);

// Update Camp
router.put("/update/:id", updateCamp);

module.exports = router;
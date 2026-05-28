const express = require("express");

const router = express.Router();

const {
  registerDonor,
  getDonorsByCamp,
} = require("../controllers/donorController");

// Register Donor Route
router.post("/register", registerDonor);
// Get Donors By Camp
router.get("/camp/:campId", getDonorsByCamp);

module.exports = router;
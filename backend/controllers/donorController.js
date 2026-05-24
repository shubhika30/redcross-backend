const Donor = require("../models/Donor");

// Register Donor
const registerDonor = async (req, res) => {
  try {
    const donor = new Donor(req.body);

    const savedDonor = await donor.save();

    res.status(201).json(savedDonor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Get Donors By Camp
const getDonorsByCamp = async (req, res) => {
  try {
    const donors = await Donor.find({
      campId: req.params.campId,
    });

    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerDonor,
  getDonorsByCamp,
};
const Camp = require("../models/Camp");
const mongoose = require("mongoose");

// =======================
// CREATE CAMP
// =======================
const createCamp = async (req, res) => {
  try {
    const newCamp = new Camp(req.body);
    const savedCamp = await newCamp.save();

    res.status(201).json({
      message: "Camp created successfully",
      data: savedCamp,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating camp",
      error: error.message,
    });
  }
};

// =======================
// GET ALL CAMPS
// =======================
const getCamps = async (req, res) => {
  try {
    const camps = await Camp.find();

    res.status(200).json({
      message: "Camps fetched successfully",
      data: camps,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching camps",
      error: error.message,
    });
  }
};

// =======================
// UPDATE CAMP
// =======================
const updateCamp = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Camp ID",
      });
    }

    const updatedCamp = await Camp.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCamp) {
      return res.status(404).json({
        message: "Camp not found",
      });
    }

    return res.status(200).json({
      message: "Camp updated successfully",
      data: updatedCamp,
    });

  } catch (error) {
    console.error("UPDATE CAMP ERROR:", error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// =======================
// EXPORTS
// =======================
module.exports = {
  createCamp,
  getCamps,
  updateCamp,
};
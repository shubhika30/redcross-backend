const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    dob: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
    },

    bloodGroup: {
      type: String,
    },

    mobileNumber: {
      type: String,
      required: true,
    },

    campId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Camp",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donor", donorSchema);
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    "Name of the Candidate": {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    "Mobile No.": {
      type: String,
      required: true,
    },
    "Date of Birth": {
      type: Date,
      required: true,
    },
    "Work Experience": {
      type: String,
      required: false,
    },
    "Resume Title": {
      type: String,
      required: false,
    },
    "Current Location": {
      type: String,
      required: false,
    },
    "Postal Address": {
      type: String,
      required: false,
    },
    "Current Employer": {
      type: String,
      required: false,
    },
    "Current Designation": {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = Admin = mongoose.model("Admin", adminSchema);

const express = require("express");
const router = express.Router();
const Admin = require("../../models/adminModel");

// @route   GET api/admin
// @desc    GET ALL Admin
// @access  PUBLIC
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    console.error("Error fetching admins:", err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/admin
// @desc    ADD ADMINS
// @access  PUBLIC
router.post("/", async (req, res) => {
  try {
    const adminData = req.body;

    if (!Array.isArray(adminData) || adminData.length === 0) {
      return res
        .status(400)
        .json({ msg: "Invalid data. Please provide an array of admins." });
    }

    const result = await Admin.insertMany(adminData, { ordered: false });
    res.status(201).json({ msg: "Admins added successfully", data: result });
  } catch (err) {
    console.error("Error adding admins:", err.message);

    if (err.code === 11000 || err.writeErrors) {
      const duplicateErrors = err.writeErrors?.map((e) => e.errmsg) || [];
      return res.status(400).json({
        msg: "Some data could not be inserted due to duplicate keys.",
        errors: duplicateErrors,
      });
    }

    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// @route   DELETE api/admin
// @desc    DELETE ALL ADMINS
// @access  PUBLIC
router.delete("/", async (req, res) => {
  try {
    const result = await Admin.deleteMany();
    res
      .status(200)
      .json({ msg: "All admins deleted successfully", data: result });
  } catch (err) {
    console.error("Error deleting admins:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

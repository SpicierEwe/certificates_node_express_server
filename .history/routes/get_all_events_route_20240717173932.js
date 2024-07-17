const express = require("express");
const router = express.Router();
const getAllEmployees = require("../controllers/getAllEmployees");

router.get("/", async (req, res) => {
  try {
    const events = await getAllEmployees();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
});

module.exports = router;

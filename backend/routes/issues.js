const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

// Save an issue
router.post("/save", async (req, res) => {
  try {
    const issue = new Issue(req.body);
    const savedIssue = await issue.save();
    res.status(201).json(savedIssue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch all issues
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

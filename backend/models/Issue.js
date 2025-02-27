const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  issueType: { type: String, required: true },
  problemStatement: { type: String, required: true },
  solution: { type: String, required: true },
  fixType: { 
    type: String, 
    required: true, 
    enum: ["Permanent", "Temporary"] 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Issue", issueSchema);

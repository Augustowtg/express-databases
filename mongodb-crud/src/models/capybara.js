const mongoose = require("mongoose");

const CapybaraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Capybara = mongoose.model("capybara", CapybaraSchema);

module.exports = Capybara;
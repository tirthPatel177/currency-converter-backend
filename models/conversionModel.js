const mongoose = require("mongoose");

const conversionSchema = new mongoose.Schema({
  from: {
    type: Currency,
    required: [true, "A conversion must have a primary currency"],
  },
  to: {
    type: Currency,
    required: [true, "A conversion must have a secondary currency"],
  },
  rate: {
    type: Number,
    required: [true, "A conversion must have a rate"],
  },
});

const Conversion = mongoose.model("Conversion", conversionSchema);

module.exports = Conversion;

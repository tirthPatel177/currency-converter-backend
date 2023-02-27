const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  countries: {
    type: string,
    required: [true, "A currency must have a country"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "A currency must have a name"],
  },
  symbol: {
    type: String,
    required: [true, "A currency must have a symbol"],
  },
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;

const Currency = require("../models/currencyModel");

exports.getAllCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.find();
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
};

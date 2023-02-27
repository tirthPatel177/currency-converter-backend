const Conversion = require("../models/conversionModel");

exports.getAllConversions = async (req, res) => {
  try {
    const conversions = await Conversion.find().limit(1).sort({ $natural: -1 });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
};

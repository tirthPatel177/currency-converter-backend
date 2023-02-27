const express = require("express");
const conversionController = require("../controllers/conversionController");

const router = express.Router();

router.route("/").get(conversionController.getAllConversions);

module.exports = router;

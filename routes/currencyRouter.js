const express = require("express");
const currencyController = require("../controllers/currencyController");

const router = express.Router();

router.route("/").get(currencyController.getAllCurrencies);

module.exports = router;

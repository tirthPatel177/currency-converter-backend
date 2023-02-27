const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const currencyRouter = require("./routes/currencyRouter");
const converterRouter = require("./routes/converterRouter");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("api/v1/convert", converterRouter);
app.use("api/v1/currency", currencyRouter);

module.exports = app;

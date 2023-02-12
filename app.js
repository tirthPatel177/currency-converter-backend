const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

// TODO: Add error handling middleware

app.get("/", (req, res) => {
  res.send("Kem Cho??!");
});

module.exports = app;

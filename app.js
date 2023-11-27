const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.get("/", (req, res) => {
  res.json({ message: "Working" });
});

app.post("/add", (req, res) => {
  let { num1, num2 } = req.body;
  console.log(req.body);
  let result = num1 + num2;
  res.json({ success: true, result });
});

app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;
  res.json({ success: true, result });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ success: true, result });
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res
      .status(400)
      .json({ success: false, error: "Division by zero is not allowed" });
  } else {
    const result = num1 / num2;
    res.json({ success: true, result });
  }
});

// Wrap the Express app with serverless-http
module.exports = app;

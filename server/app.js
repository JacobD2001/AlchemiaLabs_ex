const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// root path
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//easyfunction endpoint GET
app.get("/api/easyFunction", (req, res) => {
  const num1 = parseInt(req.query.num1, 10); //10 - for decimal nums
  const num2 = parseInt(req.query.num2, 10);

  // Check if num1 and num2 are valid numbers NaN- not a number
  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .send({ error: "Both num1 and num2 must be valid numbers." });
  }

  const sum = num1 + num2;
  res.json({ sum });
});

// Start the server on port 3000 and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

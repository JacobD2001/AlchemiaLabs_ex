const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Function to calculate the nth Fibonacci number - slower recursive approach 2.28 s for 40
// function fibonacci(n) {
//   if (n <= 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// Function to calculate the nth Fibonacci number - faster approach 0.22 s for 40
function fibonacci(n) {
  let a = 0,
    b = 1,
    c;
  if (n <= 0) return 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

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

//fibonacci endpoint POST
app.post("/api/fibo", (req, res) => {
  const { n } = req.body;

  // Validate input(n must be a non-negative integer)
  if (typeof n !== "number" || n < 0) {
    return res.status(400).json({ error: "n must be a non-negative integer." });
  }

  const result = fibonacci(n);
  res.json({ fibonacciNumber: result });
});

// Start the server on port 3000 and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

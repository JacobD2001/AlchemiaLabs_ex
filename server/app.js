const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Function to calculate the nth Fibonacci number - faster approach than recursive 0.22 s for 40
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

// Function to quickSort an array
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1); // Recursively apply to the left subarray
  quickSort(arr, index + 1, end); // Recursively apply to the right subarray
}

// Function to partition the array for quickSort
function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  // Swapping the pivot to the correct position
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

// root path
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//easyfunction endpoint GET
app.get("/api/easyFunction", (req, res) => {
  const num1 = parseInt(req.query.num1, 10);
  const num2 = parseInt(req.query.num2, 10);

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

//sort endpoint POST
app.post("/api/sort", (req, res) => {
  let { array } = req.body;

  if (!Array.isArray(array) || !array.every(Number.isInteger)) {
    return res
      .status(400)
      .json({ error: "Input must be an array of integers." });
  }

  quickSort(array, 0, array.length - 1);
  res.json({ sortedArray: array });
});

module.exports = app;

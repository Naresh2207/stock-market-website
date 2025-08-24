const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Dummy Stock Data API
app.get("/api/stocks", (req, res) => {
  const stocks = [
    { id: 1, name: "Apple", price: 178 },
    { id: 2, name: "Tesla", price: 242 },
    { id: 3, name: "Amazon", price: 133 },
  ];
  res.json(stocks);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

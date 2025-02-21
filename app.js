const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000; // Render assigns a port dynamically

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Enable JSON parsing

// Sample API route
app.get("/", (req, res) => {
  res.send("Syledger API is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Syledger API is running on port ${PORT}`);
});

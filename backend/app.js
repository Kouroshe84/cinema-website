// Import core modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Registering Routes
app.use("/api/movies", require("./routes/movieRoutes")); // Movies
app.use("/api/users", require("./routes/userRoutes"));   // Users
app.use("/api/showtimes", require("./routes/showtimeRoutes")); // Showtimes
app.use("/api/orders", require("./routes/orderRoutes")); // Orders
app.use("/api/tickets", require("./routes/ticketRoutes"));// Tickets

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
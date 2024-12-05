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

// Route Handlers
app.use("/api/movies", require("./routes/movieRoutes")); // Movie routes
app.use("/api/users", require("./routes/userRoutes"));   // User routes
app.use("/api/showtimes", require("./routes/showtimeRoutes")); // Showtime routes
app.use("/api/tickets", require("./routes/ticketRoutes")); // Uncomment when ticket routes are ready

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
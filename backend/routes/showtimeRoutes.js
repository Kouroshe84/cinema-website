const express = require("express");
const router = express.Router();
const {
    getShowtimes,
    addShowtime,
    getShowtimesByMovieId,
    getShowtimeById,
    updateShowtime,
    deleteShowtime,
} = require("../controllers/showtimeController");

// List all showtimes
router.get("/", getShowtimes);

// Add a new showtime
router.post("/", addShowtime);

// Get showtimes by movie ID
router.get("/movie/:movieId", getShowtimesByMovieId);

// Get a showtime by ID
router.get("/:id", getShowtimeById);

// Update a showtime
router.put("/:id", updateShowtime);

// Delete a showtime
router.delete("/:id", deleteShowtime);

module.exports = router;

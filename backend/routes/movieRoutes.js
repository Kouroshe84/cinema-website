const express = require("express");
const router = express.Router();
const {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

// List all movies
router.get("/", getMovies);

// Add a movie
router.post("/", addMovie);

// Get a movie by ID
router.get("/:id", getMovieById);

// Update a movie
router.put("/:id", updateMovie);

// Delete a movie
router.delete("/:id", deleteMovie);

module.exports = router;
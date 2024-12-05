const Movie = require("../models/movie");

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies", error: error.message });
  }
};

// @desc    Add a new movie
// @route   POST /api/movies
// @access  Public
const addMovie = async (req, res) => {
  try {
    const { title, genre, duration, releaseDate, showtimes } = req.body;

    const movie = new Movie({
      title,
      genre,
      duration,
      releaseDate,
      showtimes,
    });

    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ message: "Failed to add movie", error: error.message });
  }
};

// @desc    Get a movie by ID
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie", error: error.message });
  }
};

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Public
const updateMovie = async (req, res) => {
  try {
    const { title, genre, duration, releaseDate, showtimes } = req.body;

    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    Object.assign(movie, {
      title: title || movie.title,
      genre: genre || movie.genre,
      duration: duration || movie.duration,
      releaseDate: releaseDate || movie.releaseDate,
      showtimes: showtimes || movie.showtimes,
    });

    const updatedMovie = await movie.save();
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: "Failed to update movie", error: error.message });
  }
};

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Public
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie", error: error.message });
  }
};

module.exports = {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
};
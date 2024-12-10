const Showtime = require("../models/showtime");

// Get all showtimes
const getShowtimes = async (req, res) => {
    try {
        const showtimes = await Showtime.find().populate("movie");
        res.status(200).json(showtimes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch showtimes", error: error.message });
    }
};

// Add a new showtime
const addShowtime = async (req, res) => {
    try {
        const { movie, theater, screen, date, time, availableSeats } = req.body;

        if (!movie || !theater || !screen || !date || !time || !availableSeats) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const showtime = new Showtime({ movie, theater, screen, date, time, availableSeats });
        const createdShowtime = await showtime.save();

        res.status(201).json(createdShowtime);
    } catch (error) {
        res.status(400).json({ message: "Failed to add showtime", error: error.message });
    }
};

// Get showtimes by movie ID
router.get("/movie/:movieId", async (req, res) => {
    try {
        const { movieId } = req.params;
        const showtimes = await Showtime.find({ movie: movieId }).populate("movie");
        if (!showtimes || showtimes.length === 0) {
            return res.status(404).json({ message: "No showtimes found for this movie" });
        }
        res.status(200).json(showtimes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch showtimes", error: error.message });
    }
});


// Get a showtime by ID
const getShowtimeById = async (req, res) => {
    try {
        const showtime = await Showtime.findById(req.params.id).populate("movie");
        if (!showtime) {
            return res.status(404).json({ message: "Showtime not found" });
        }
        res.status(200).json(showtime);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch showtime", error: error.message });
    }
};

// Update a showtime
const updateShowtime = async (req, res) => {
    try {
        const { movie, theater, screen, date, time, availableSeats } = req.body;

        const showtime = await Showtime.findById(req.params.id);
        if (!showtime) {
            return res.status(404).json({ message: "Showtime not found" });
        }

        Object.assign(showtime, { movie, theater, screen, date, time, availableSeats });

        const updatedShowtime = await showtime.save();
        res.status(200).json(updatedShowtime);
    } catch (error) {
        res.status(400).json({ message: "Failed to update showtime", error: error.message });
    }
};

// Delete a showtime
const deleteShowtime = async (req, res) => {
    try {
        const showtime = await Showtime.findByIdAndDelete(req.params.id);
        if (!showtime) {
            return res.status(404).json({ message: "Showtime not found" });
        }
        res.status(200).json({ message: "Showtime deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete showtime", error: error.message });
    }
};

module.exports = {
    getShowtimes,
    addShowtime,
    getShowtimesByMovieId,
    getShowtimeById,
    updateShowtime,
    deleteShowtime,
};

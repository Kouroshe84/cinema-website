const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true }, // In minutes
  releaseDate: { type: Date, required: true },
  showtimes: [
    {
      theater: String,
      time: String,
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
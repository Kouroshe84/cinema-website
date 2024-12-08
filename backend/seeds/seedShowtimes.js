const mongoose = require("mongoose");
const Showtime = require("../models/showtime"); // Adjust the path as needed
const Movie = require("../models/movie"); // Adjust the path as needed
const dotenv = require("dotenv");

dotenv.config();

// Sample showtimes data
const seedShowtimes = async () => {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
    console.log("Connected to MongoDB");

    // Retrieve a list of movies (assuming your movies collection is populated)
    const movies = await Movie.find();
    if (movies.length === 0) {
      throw new Error("No movies found. Please seed the movies collection first.");
    }

    // Sample showtimes to seed
    const showtimesData = [
      {
        movie: movies[0]._id, // Replace with dynamic movie IDs
        theater: "Cineplex Yonge-Dundas",
        screen: 1,
        date: new Date("2024-12-15"),
        time: "18:30",
        availableSeats: 100,
      },
      {
        movie: movies[1]._id, // Replace with dynamic movie IDs
        theater: "SilverCity Richmond Hill",
        screen: 3,
        date: new Date("2024-12-16"),
        time: "20:00",
        availableSeats: 120,
      },
      {
        movie: movies[0]._id, // Another showtime for the same movie
        theater: "Cineplex Yonge-Dundas",
        screen: 2,
        date: new Date("2024-12-17"),
        time: "14:00",
        availableSeats: 80,
      },
    ];

    // Clear the existing collection (optional)
    await Showtime.deleteMany();
    console.log("Cleared existing showtimes");

    // Insert the new showtimes
    const insertedShowtimes = await Showtime.insertMany(showtimesData);
    console.log("Seeded showtimes:", insertedShowtimes);
  } catch (err) {
    console.error("Error seeding showtimes:", err);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed");
  }
};

// Run the seed function
seedShowtimes();
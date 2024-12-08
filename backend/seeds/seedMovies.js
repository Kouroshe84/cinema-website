// seedShowtimes.js

// Import required libraries and modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Showtime = require('./models/showtime'); // Assuming you have a showtime schema
const Movie = require('./models/movie'); // Needed to associate showtimes with movies

// Load environment variables from .env file
dotenv.config();

// Define the MongoDB connection URI
const dbURI = process.env.MONGODB_URI;

// Sample showtime data
const showtimesData = [
  {
    movieTitle: 'Inception',
    showtime: new Date('2024-12-10T14:00:00'), // Example showtime
    screen: 1,
    price: 15.0,
  },
  {
    movieTitle: 'Interstellar',
    showtime: new Date('2024-12-10T16:30:00'),
    screen: 2,
    price: 12.5,
  },
  {
    movieTitle: 'The Matrix',
    showtime: new Date('2024-12-10T18:00:00'),
    screen: 3,
    price: 10.0,
  },
];

// Function to seed the showtime data
const seedShowtimes = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Clear the existing showtime collection
    await Showtime.deleteMany({});
    console.log('Showtime collection cleared');

    // Map the showtimesData to populate the database
    const showtimesPromises = showtimesData.map(async (data) => {
      // Find the movie ID based on the title
      const movie = await Movie.findOne({ title: data.movieTitle });
      if (!movie) {
        console.error(`Movie not found: ${data.movieTitle}`);
        return null;
      }

      // Create a new showtime entry
      return new Showtime({
        movieId: movie._id,
        showtime: data.showtime,
        screen: data.screen,
        price: data.price,
      });
    });

    // Wait for all showtime documents to be created
    const showtimes = await Promise.all(showtimesPromises);

    // Filter out any null values in case some movies were not found
    const validShowtimes = showtimes.filter((showtime) => showtime !== null);

    // Insert valid showtime documents into the database
    await Showtime.insertMany(validShowtimes);
    console.log('Showtimes seeded successfully');
  } catch (error) {
    console.error('Error seeding showtimes:', error.message);
  } finally {
    // Disconnect from MongoDB
    mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
};

// Execute the seedShowtimes function
seedShowtimes();
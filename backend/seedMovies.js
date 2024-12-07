const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("./models/movie");

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

// Movies Data
const movies = [
  // The Matrix Series
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    duration: 136,
    releaseDate: new Date("1999-03-31"),
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    showtimes: [
      { theater: "Theater 1", time: "6:00 PM" },
      { theater: "Theater 2", time: "9:00 PM" },
    ],
  },
  {
    title: "The Matrix Reloaded",
    genre: "Sci-Fi",
    duration: 138,
    releaseDate: new Date("2003-05-15"),
    posterUrl: "https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
    showtimes: [
      { theater: "Theater 3", time: "5:30 PM" },
      { theater: "Theater 4", time: "8:30 PM" },
    ],
  },
  {
    title: "The Matrix Revolutions",
    genre: "Sci-Fi",
    duration: 129,
    releaseDate: new Date("2003-11-05"),
    posterUrl: "https://image.tmdb.org/t/p/w500/fgm8OZ7o4G1G1I9EeGcb85Noe6L.jpg",
    showtimes: [
      { theater: "Theater 2", time: "7:00 PM" },
      { theater: "Theater 5", time: "10:00 PM" },
    ],
  },

  // Christopher Nolan Movies
  {
    title: "Inception",
    genre: "Sci-Fi",
    duration: 148,
    releaseDate: new Date("2010-07-16"),
    posterUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    showtimes: [
      { theater: "Theater 1", time: "4:30 PM" },
      { theater: "Theater 3", time: "7:00 PM" },
    ],
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    duration: 169,
    releaseDate: new Date("2014-11-07"),
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    showtimes: [
      { theater: "Theater 4", time: "6:00 PM" },
      { theater: "Theater 6", time: "9:30 PM" },
    ],
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    duration: 152,
    releaseDate: new Date("2008-07-18"),
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    showtimes: [
      { theater: "Theater 5", time: "5:00 PM" },
      { theater: "Theater 7", time: "8:45 PM" },
    ],
  },

  // Alfred Hitchcock Movies
  {
    title: "Psycho",
    genre: "Horror",
    duration: 109,
    releaseDate: new Date("1960-06-16"),
    posterUrl: "https://image.tmdb.org/t/p/w500/5j3bAhtc5YHVMqOMFPkZp3DqFwP.jpg",
    showtimes: [
      { theater: "Theater 2", time: "6:30 PM" },
      { theater: "Theater 4", time: "9:00 PM" },
    ],
  },
  {
    title: "Rear Window",
    genre: "Mystery",
    duration: 112,
    releaseDate: new Date("1954-09-01"),
    posterUrl: "https://image.tmdb.org/t/p/w500/5djEMyUqvHhtcMPeUCaHSXrz5GB.jpg",
    showtimes: [
      { theater: "Theater 6", time: "7:30 PM" },
      { theater: "Theater 8", time: "10:00 PM" },
    ],
  },

  // David Fincher Movies
  {
    title: "Fight Club",
    genre: "Drama",
    duration: 139,
    releaseDate: new Date("1999-10-15"),
    posterUrl: "https://image.tmdb.org/t/p/w500/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
    showtimes: [
      { theater: "Theater 1", time: "8:00 PM" },
      { theater: "Theater 5", time: "10:30 PM" },
    ],
  },
  {
    title: "Se7en",
    genre: "Thriller",
    duration: 127,
    releaseDate: new Date("1995-09-22"),
    posterUrl: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    showtimes: [
      { theater: "Theater 3", time: "6:30 PM" },
      { theater: "Theater 7", time: "9:00 PM" },
    ],
  },
  {
    title: "The Social Network",
    genre: "Biography",
    duration: 120,
    releaseDate: new Date("2010-10-01"),
    posterUrl: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    showtimes: [
      { theater: "Theater 2", time: "7:00 PM" },
      { theater: "Theater 8", time: "10:00 PM" },
    ],
  },

  // Additional Movies
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    duration: 99,
    releaseDate: new Date("2014-02-26"),
    posterUrl: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    showtimes: [
      { theater: "Theater 3", time: "6:00 PM" },
      { theater: "Theater 5", time: "8:30 PM" },
    ],
  },
  {
    title: "Parasite",
    genre: "Thriller",
    duration: 132,
    releaseDate: new Date("2019-05-30"),
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    showtimes: [
      { theater: "Theater 4", time: "7:00 PM" },
      { theater: "Theater 7", time: "10:30 PM" },
    ],
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    duration: 154,
    releaseDate: new Date("1994-10-14"),
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    showtimes: [
      { theater: "Theater 2", time: "7:30 PM" },
      { theater: "Theater 5", time: "10:30 PM" },
    ],
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    duration: 142,
    releaseDate: new Date("1994-09-23"),
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    showtimes: [
      { theater: "Theater 3", time: "6:00 PM" },
      { theater: "Theater 4", time: "9:00 PM" },
    ],
  },
  {
    title: "The Godfather",
    genre: "Crime",
    duration: 175,
    releaseDate: new Date("1972-03-24"),
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    showtimes: [
      { theater: "Theater 1", time: "5:00 PM" },
      { theater: "Theater 6", time: "8:45 PM" },
    ],
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    duration: 144,
    releaseDate: new Date("1994-07-06"),
    posterUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    showtimes: [
      { theater: "Theater 2", time: "5:30 PM" },
      { theater: "Theater 4", time: "8:30 PM" },
    ],
  },
  {
    title: "The Silence of the Lambs",
    genre: "Thriller",
    duration: 118,
    releaseDate: new Date("1991-02-14"),
    posterUrl: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    showtimes: [
      { theater: "Theater 5", time: "6:30 PM" },
      { theater: "Theater 7", time: "9:30 PM" },
    ],
  },
  {
    title: "Goodfellas",
    genre: "Crime",
    duration: 145,
    releaseDate: new Date("1990-09-19"),
    posterUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    showtimes: [
      { theater: "Theater 3", time: "5:45 PM" },
      { theater: "Theater 8", time: "8:15 PM" },
    ],
  },
  {
    title: "Schindler's List",
    genre: "History",
    duration: 195,
    releaseDate: new Date("1993-11-30"),
    posterUrl: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    showtimes: [
      { theater: "Theater 1", time: "4:30 PM" },
      { theater: "Theater 5", time: "8:30 PM" },
    ],
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    duration: 178,
    releaseDate: new Date("2001-12-19"),
    posterUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    showtimes: [
      { theater: "Theater 2", time: "4:30 PM" },
      { theater: "Theater 6", time: "8:30 PM" },
    ],
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    genre: "Fantasy",
    duration: 179,
    releaseDate: new Date("2002-12-18"),
    posterUrl: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    showtimes: [
      { theater: "Theater 3", time: "5:00 PM" },
      { theater: "Theater 7", time: "9:00 PM" },
    ],
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    duration: 201,
    releaseDate: new Date("2003-12-17"),
    posterUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    showtimes: [
      { theater: "Theater 4", time: "4:30 PM" },
      { theater: "Theater 8", time: "8:30 PM" },
    ],
  },
  {
    title: "The Wolf of Wall Street",
    genre: "Biography",
    duration: 180,
    releaseDate: new Date("2013-12-25"),
    posterUrl: "https://image.tmdb.org/t/p/w500/vK1o5rZGqxyovfIhZyMELhk03wO.jpg",
    showtimes: [
      { theater: "Theater 2", time: "5:30 PM" },
      { theater: "Theater 6", time: "9:00 PM" },
    ],
  },
  {
    title: "Django Unchained",
    genre: "Western",
    duration: 165,
    releaseDate: new Date("2012-12-25"),
    posterUrl: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    showtimes: [
      { theater: "Theater 1", time: "6:00 PM" },
      { theater: "Theater 7", time: "9:30 PM" },
    ],
  },
  {
    title: "The Green Mile",
    genre: "Drama",
    duration: 189,
    releaseDate: new Date("1999-12-10"),
    posterUrl: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    showtimes: [
      { theater: "Theater 5", time: "4:00 PM" },
      { theater: "Theater 8", time: "8:00 PM" },
    ],
  },
  {
    title: "Saving Private Ryan",
    genre: "War",
    duration: 169,
    releaseDate: new Date("1998-07-24"),
    posterUrl: "https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    showtimes: [
      { theater: "Theater 4", time: "5:30 PM" },
      { theater: "Theater 6", time: "9:15 PM" },
    ],
  },
  {
    title: "Gladiator",
    genre: "Action",
    duration: 155,
    releaseDate: new Date("2000-05-05"),
    posterUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    showtimes: [
      { theater: "Theater 1", time: "6:00 PM" },
      { theater: "Theater 7", time: "9:30 PM" },
    ],
  },
  {
    title: "Avengers: Endgame",
    genre: "Action",
    duration: 181,
    releaseDate: new Date("2019-04-26"),
    posterUrl: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    showtimes: [
      { theater: "Theater 3", time: "4:30 PM" },
      { theater: "Theater 8", time: "8:30 PM" },
    ],
  },
  {
    title: "Avatar",
    genre: "Fantasy",
    duration: 162,
    releaseDate: new Date("2009-12-18"),
    posterUrl: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    showtimes: [
      { theater: "Theater 2", time: "5:00 PM" },
      { theater: "Theater 5", time: "9:00 PM" },
    ],
  },
  {
    title: "Titanic",
    genre: "Romance",
    duration: 195,
    releaseDate: new Date("1997-12-19"),
    posterUrl: "https://image.tmdb.org/t/p/w500/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg",
    showtimes: [
      { theater: "Theater 1", time: "6:30 PM" },
      { theater: "Theater 4", time: "10:00 PM" },
    ],
  },
  {
    title: "The Departed",
    genre: "Crime",
    duration: 151,
    releaseDate: new Date("2006-10-06"),
    posterUrl: "https://image.tmdb.org/t/p/w500/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg",
    showtimes: [
      { theater: "Theater 6", time: "5:00 PM" },
      { theater: "Theater 7", time: "8:30 PM" },
    ],
  },
  {
    title: "Joker",
    genre: "Drama",
    duration: 122,
    releaseDate: new Date("2019-10-04"),
    posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    showtimes: [
      { theater: "Theater 3", time: "6:30 PM" },
      { theater: "Theater 8", time: "10:00 PM" },
    ],
  },
];

// Seed function
const seedMovies = async () => {
  try {
    await connectDB();

    console.log("Deleting existing movies...");
    await Movie.deleteMany(); // Clear existing collection

    console.log("Seeding new movies...");
    await Movie.insertMany(movies);

    console.log("Movies seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding movies:", error.message);
    process.exit(1);
  }
};

// Run the script
seedMovies();
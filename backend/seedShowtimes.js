const Showtime = require("./models/showtime");

const showtimes = [
    {
      movie: "6754b5385308892ab83e501c",
      theater: "Theater 1",
      screen: 1,
      date: new Date("2024-12-15"),
      time: "7:00 PM",
      availableSeats: 100,
    },
    {
      movie: "6754b5385308892ab83e501f",
      theater: "Theater 2",
      screen: 2,
      date: new Date("2024-12-15"),
      time: "8:30 PM",
      availableSeats: 120,
    },
    {
      movie: "6754b5385308892ab83e5055",
      theater: "Theater 3",
      screen: 3,
      date: new Date("2024-12-16"),
      time: "6:00 PM",
      availableSeats: 80,
    },
    {
      movie: "6754b5385308892ab83e5061",
      theater: "Theater 4",
      screen: 4,
      date: new Date("2024-12-16"),
      time: "9:00 PM",
      availableSeats: 50,
    },
    {
      movie: "6754b5385308892ab83e5064",
      theater: "Theater 5",
      screen: 5,
      date: new Date("2024-12-17"),
      time: "5:30 PM",
      availableSeats: 150,
    },
  ]

const seedShowtimes = async () => {
  try {
    await Showtime.deleteMany();
    await Showtime.insertMany(showtimes);
    console.log("Showtimes seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding showtimes:", error.message);
    process.exit(1);
  }
};
seedShowtimes();
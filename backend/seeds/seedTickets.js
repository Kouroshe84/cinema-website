const Ticket = require("../models/ticket"); // Adjust path

const tickets = [
    {
      user: "USER_ID_1", // Replace with actual ObjectId from the User collection
      showtime: "SHOWTIME_ID_1", // Replace with actual ObjectId from the Showtime collection
      seatNumber: 10,
      price: 12.5,
    },
    {
      user: "USER_ID_2", // Replace with actual ObjectId
      showtime: "SHOWTIME_ID_2", // Replace with actual ObjectId
      seatNumber: 25,
      price: 15.0,
    },
    {
      user: "USER_ID_3", // Replace with actual ObjectId
      showtime: "SHOWTIME_ID_3", // Replace with actual ObjectId
      seatNumber: 5,
      price: 10.0,
    },
    {
      user: "USER_ID_4", // Replace with actual ObjectId
      showtime: "SHOWTIME_ID_4", // Replace with actual ObjectId
      seatNumber: 30,
      price: 20.0,
    },
    {
      user: "USER_ID_5", // Replace with actual ObjectId
      showtime: "SHOWTIME_ID_5", // Replace with actual ObjectId
      seatNumber: 50,
      price: 18.5,
    },
  ];

const seedTickets = async () => {
  try {
    await Ticket.deleteMany();
    await Ticket.insertMany(tickets);
    console.log("Tickets seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding tickets:", error.message);
    process.exit(1);
  }
};
seedTickets();
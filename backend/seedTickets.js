const Ticket = require("./models/ticket"); // Adjust path

const tickets = [
  // Replace "USER_ID_X" and "SHOWTIME_ID_X" with actual IDs
  {
    user: "USER_ID_1",
    showtime: "SHOWTIME_ID_1",
    seatNumber: 10,
    price: 12.5,
  },
  // Add more tickets here
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
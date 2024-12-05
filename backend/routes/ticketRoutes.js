const express = require("express");
const router = express.Router();
const {
  getTickets,
  addTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");

// List all tickets
router.get("/", getTickets);

// Add a new ticket
router.post("/", addTicket);

// Get a ticket by ID
router.get("/:id", getTicketById);

// Update a ticket
router.put("/:id", updateTicket);

// Delete a ticket
router.delete("/:id", deleteTicket);

module.exports = router;
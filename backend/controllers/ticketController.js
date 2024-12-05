const Ticket = require("../models/ticket");

// @desc    Get all tickets
// @route   GET /api/tickets
// @access  Public
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tickets", error: error.message });
  }
};

// @desc    Add a new ticket
// @route   POST /api/tickets
// @access  Public
const addTicket = async (req, res) => {
  try {
    const { userId, showtimeId, seatNumber, price } = req.body;

    const ticket = new Ticket({
      userId,
      showtimeId,
      seatNumber,
      price,
    });

    const createdTicket = await ticket.save();
    res.status(201).json(createdTicket);
  } catch (error) {
    res.status(400).json({ message: "Failed to add ticket", error: error.message });
  }
};

// @desc    Get a ticket by ID
// @route   GET /api/tickets/:id
// @access  Public
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch ticket", error: error.message });
  }
};

// @desc    Update a ticket
// @route   PUT /api/tickets/:id
// @access  Public
const updateTicket = async (req, res) => {
  try {
    const { userId, showtimeId, seatNumber, price } = req.body;

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    Object.assign(ticket, {
      userId: userId || ticket.userId,
      showtimeId: showtimeId || ticket.showtimeId,
      seatNumber: seatNumber || ticket.seatNumber,
      price: price || ticket.price,
    });

    const updatedTicket = await ticket.save();
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(400).json({ message: "Failed to update ticket", error: error.message });
  }
};

// @desc    Delete a ticket
// @route   DELETE /api/tickets/:id
// @access  Public
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete ticket", error: error.message });
  }
};

module.exports = {
  getTickets,
  addTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
};
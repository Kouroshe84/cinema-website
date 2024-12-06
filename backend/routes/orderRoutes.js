const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const mongoose = require("mongoose");

// POST to create a new order
router.post("/", async (req, res) => {
    try {
        const { userid, movieid, seats, totalPrice, showTime } = req.body;

        // Validate essential data
        if (!userid || !movieid || !seats || !totalPrice || !showTime) {
            return res.status(400).send({ message: "Missing required fields" });
        }

        // Create a new order using the Order model
        const order = new Order({
            userid,
            movieid,
            seats,
            totalPrice,
            showTime,
        });

        // Save the order to the database
        const savedOrder = await order.save();

        res.status(201).send({ message: "Order created", order: savedOrder });
        console.log("Response data: ", data);
    } catch (err) {
        res.status(500).send({ message: "Failed to create order", error: err.message });
    }
});

// GET a specific order by ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received ID:", id);
        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.error("Invalid ID format:", id);
            return res.status(400).send({ error: "Invalid ID format." });
        }

        // Find the order by ID
        const order = await Order.findById(id);
        console.log("Fetched Order:", order);

        if (!order) {
            console.error("Order not found for ID:", id);
            return res.status(404).send({ message: "Order not found" });
        }

        res.send(order);
    } catch (err) {
        res.status(500).send({ message: "Error fetching order", error: err.message });
    }
});

module.exports = router;
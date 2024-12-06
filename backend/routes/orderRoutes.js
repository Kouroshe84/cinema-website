const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// POST to create a new order
router.post("/", orderController.createOrder);

// GET a specific order by ID
router.get("/:id", orderController.getOrderById);

module.exports = router;
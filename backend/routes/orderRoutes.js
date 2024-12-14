const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// POST to create a new order
router.post("/", orderController.createOrder);

//Get all order
router.get("/", orderController.getAllOrders);

// GET a specific order by ID
router.get("/:id", orderController.getOrderById);


router.get("/movie/:id", orderController.getOrderByMovie);

router.patch("/:id/delete", orderController.softDeleteOrder)

module.exports = router;
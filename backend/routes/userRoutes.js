const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// List all users
router.get("/", getUsers);

// Add a new user
router.post("/", addUser);

// Get a user by ID
router.get("/:id", getUserById);

// Update a user
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

module.exports = router;
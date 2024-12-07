const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user"); // Adjust path if needed

dotenv.config(); // Load environment variables

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

// User Data
const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123", // For real-world apps, hash the password before saving
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123", // Replace with hashed password in production
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    password: "password123",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    password: "password123",
  },
];

// Seed Function
const seedUsers = async () => {
  try {
    await connectDB(); // Connect to the database

    console.log("Deleting existing users...");
    await User.deleteMany(); // Clear the users collection

    console.log("Seeding new users...");
    const insertedUsers = await User.insertMany(users); // Insert new user data
    console.log("Users seeded successfully:", insertedUsers);

    process.exit(0); // Exit the process
  } catch (error) {
    console.error("Error seeding users:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Execute the seeding
seedUsers();
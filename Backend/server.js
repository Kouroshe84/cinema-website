const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./models/user");  // User model path

const app = express();
app.use(express.json());
app.use(cors());

// Secret key for JWT token
const secretKey = 'your_jwt_secret'; // Use a secret key for JWT

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cinemaweb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB connection error:", err));

// User Registration Endpoint
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API to verify token and get user info
app.post('/api/verify', async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.userId); // Assuming userId is in the token payload
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user: { email: user.email } }); // Return only the email (or any other user data)
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

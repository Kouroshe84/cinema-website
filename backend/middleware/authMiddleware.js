const jwt = require("jsonwebtoken");
const User = require("./models/user"); // Assuming you have a User model

const protect = async (req, res, next) => {
  let token;

  // Check if the token is sent in the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user associated with the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error("Error with token authentication", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = { protect };
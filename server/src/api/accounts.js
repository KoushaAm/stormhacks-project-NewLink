import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const router = express.Router();

// signup route
router.post("/signup", async (req, res) => {
  console.log("Signup endpoint hit");
  const { username, email, password, bio, tags } = req.body;

  if (!username || !email || !password) {
    console.log("Missing fields");
    return res.status(400).send({ message: "Missing fields" });
  }

  try {
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      console.log("Username or email already exists");
      return res
        .status(400)
        .send({ message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, bio, tags });
    await user.save();
    console.log("User created successfully");
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("An error occurred during signup", error);
    res.status(500).send({ message: error.message });
  }
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Missing fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({ message: "Invalid password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email,
        bio: user.bio,
        tags: user.tags,
      },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.send({ message: "Logged in successfully", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;

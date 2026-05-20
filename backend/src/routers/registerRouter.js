import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Usermodel } from "../models/registerSchema.js";

const user = express.Router();

user.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: "All filds are requier" });
    }
    const user = await Usermodel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user Already exist" });
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const newUser = await Usermodel.create({
      firstName,
      lastName,
      email,
      password: hashedpass,
    });
    const token = await jwt.sign(
      { email, id: newUser._id },
      process.env.SECRIT_KEY,
    );
    res.status(200).json({ message: "Created user Successfly", token });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

// login
user.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: "Email or Password uncorect" });
    }
    const user = await Usermodel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await jwt.sign(
        { email, id: user._id },
        process.env.SECRIT_KEY,
      );
      res.status(200).json({ message: "Login Successfly" });
    } else {
      return res.status(400).json({ message: "Email or Password uncorect" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

// git _id
user.get("/:id", async (req, res) => {
  try {
    const userId = await Usermodel.findById(req.params.id);
    if (!userId) {
      return res.status(400).json({ message: "can't find user id" });
    }
    res.status(200).json({ userId });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default user;

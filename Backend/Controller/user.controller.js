import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../Jwt/genrateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !password || !confirmpassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();
        createTokenAndSaveCookie(newUser._id,res);

        // Send a success response
        res.status(201).json({ message: "User registered successfully", newUser});

    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

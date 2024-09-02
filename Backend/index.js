import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express()
dotenv.config();

const PORT =process.env.PORT || 5000;
const URI = process.env.MOGODB_URI;
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error")
    
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
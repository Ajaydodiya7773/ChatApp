import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./Route/user.router.js";
import cors from "cors";
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors()); // isko hum isliye import karwate hai Taki hamara backend and frontend ek jagh run kare
const PORT =process.env.PORT || 5001;
const URI = process.env.MOGODB_URI;
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error")
    
}
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
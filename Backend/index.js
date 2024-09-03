import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./Route/user.router.js";

const app = express()
dotenv.config();
app.use(express.json());

const PORT =process.env.PORT || 5000;
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
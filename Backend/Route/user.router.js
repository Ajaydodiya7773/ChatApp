import express from "express";
import { getUserProfile, login, logout, signup } from "../Controller/user.controller.js";

const router = express.Router();

// Define the signup route
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",logout);
router.get("/getUserProfile",getUserProfile)
export default router;

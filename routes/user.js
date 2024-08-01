import express from "express";
import { protect } from "../middleware/auth.js";
const router = express.Router();

// import controller
import { getUserProfile } from "../controllers/user.js";

router.route("/:id").get(protect, getUserProfile);

export default router;

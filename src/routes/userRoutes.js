import express from "express";
import { getAllUsers, getUserDetail } from "../controllers/userController.js";

const router = express.Router();

// Mendefinisikan Endpoints untuk User
router.get("/", getAllUsers);
router.get("/:id", getUserDetail);

export default router;

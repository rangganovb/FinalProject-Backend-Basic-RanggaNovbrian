import express from "express";
import { getAllHistory } from "../controllers/historyController.js";

const router = express.Router();

// Endpoint untuk melihat log
router.get("/", getAllHistory);

export default router;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./src/routes/userRoutes.js";
import deviceRoutes from "./src/routes/deviceRoutes.js";
import historyRoutes from "./src/routes/historyRoutes.js";

import requestLogger from "./src/middleware/requestLogger.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/users", requestLogger, userRoutes);
app.use("/api/devices", requestLogger, deviceRoutes);
app.use("/api/history", requestLogger, historyRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

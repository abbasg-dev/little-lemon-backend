import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/error-handler.js";

// import routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

dotenv.config();

// connect to db
connectDB();

const app = express();
const api = process.env.API_URL;

// app middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.options("*", cors());
app.use(errorHandler);

// middleware
app.use(`${api}/auth`, authRoutes);
app.use(`${api}/user`, userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

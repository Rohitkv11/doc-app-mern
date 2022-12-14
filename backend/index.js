import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

//mongodb connection
connectDB();

//application middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);

//server listening
app.listen(process.env.PORT, () => {
  console.log(chalk.blue("server running in port"));
});

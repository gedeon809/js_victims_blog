import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
// connect to my MongoDB server
const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };
app.listen(PORT, () => {
    connect();
  console.log(`Server is running on port ${PORT}`);
});

//middleware
app.use(cors());
app.use(cookieParser())
//allowing the app to take a json file from outside
app.use(express.json());





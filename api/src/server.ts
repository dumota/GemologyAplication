import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { AppError } from "./errors/AppError";
import "./Database/Mongo_Db/config";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(port, () => {
  console.log("serve is running in " + port + " !");
});

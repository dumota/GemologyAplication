import "reflect-metadata";
import "./shared/container";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import dotenv from "dotenv";
dotenv.config();
import "./Database/Mongo_Db/config";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    msg: `Internal server error - ${err.message}`,
  });
});

app.listen(port, () => {
  console.log("serve is running in " + port + " !");
});

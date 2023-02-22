import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/api/users", userRoutes);

export { routes };

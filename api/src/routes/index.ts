import { Router } from "express";
import { uploadImageRoutes } from "./uploadImage.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/api/users", userRoutes);
routes.use("/api/upload", uploadImageRoutes);

export { routes };

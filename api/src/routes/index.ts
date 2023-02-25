import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { postRoutes } from "./post.routes";
import { uploadImageRoutes } from "./uploadImage.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/api/users", userRoutes);
routes.use("/api/upload", uploadImageRoutes);
routes.use("/api/category", categoryRoutes);
routes.use("/api/post", postRoutes);

export { routes };

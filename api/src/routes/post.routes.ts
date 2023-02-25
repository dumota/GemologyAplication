import { Router } from "express";
import { CreatePostController } from "../modules/Post/useCases/createPost/CreatePostController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const postRoutes = Router();

const createPostController = new CreatePostController();

postRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createPostController.handle
);

export { postRoutes };

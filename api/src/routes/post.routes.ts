import { Router } from "express";
import { CreatePostController } from "../modules/Post/useCases/createPost/CreatePostController";
import { UpdatePostController } from "../modules/Post/useCases/updatePost/UpdatePostController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const postRoutes = Router();

const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();

postRoutes.post("/", ensureAutheticated, createPostController.handle);
postRoutes.put("/", ensureAutheticated, updatePostController.handle);

export { postRoutes };

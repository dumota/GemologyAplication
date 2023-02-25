import { json } from "body-parser";
import { Router } from "express";
import { PostRepository } from "../modules/Post/repositories/implementation/PostRepository";
import { CreatePostController } from "../modules/Post/useCases/createPost/CreatePostController";
import { GetRandomPostsController } from "../modules/Post/useCases/getRandomPostWithUser/GetRandomPostsController";
import { UpdatePostController } from "../modules/Post/useCases/updatePost/UpdatePostController";
import { UserRepository } from "../modules/User/repositories/implementantion/UserRepository";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const postRoutes = Router();

const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();
const getRandomPostsController = new GetRandomPostsController();

postRoutes.post("/", ensureAutheticated, createPostController.handle);
postRoutes.put("/", ensureAutheticated, updatePostController.handle);
postRoutes.get("/", getRandomPostsController.handle);

export { postRoutes };

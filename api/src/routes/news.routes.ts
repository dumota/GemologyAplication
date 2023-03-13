import { Router } from "express";
import { CreateNewsController } from "../modules/News/useCases/createNews/CreateNewsController";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const createNewsController = new CreateNewsController();
const newsRoutes = Router();


newsRoutes.post("/", ensureAutheticated, createNewsController.handle)

export { newsRoutes }
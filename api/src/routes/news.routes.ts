import { Router } from "express";
import { CreateNewsController } from "../modules/News/useCases/createNews/CreateNewsController";
import { GetAllNewsController } from "../modules/News/useCases/getAllNews/GetAllNewsController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const createNewsController = new CreateNewsController();
const getAllNewsController = new GetAllNewsController();

const newsRoutes = Router();


newsRoutes.post("/", ensureAutheticated, ensureAdmin, createNewsController.handle)
newsRoutes.get("/", ensureAutheticated, ensureAdmin, getAllNewsController.handle)

export { newsRoutes }
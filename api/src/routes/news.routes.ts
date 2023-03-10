import { Router } from "express";
import { CreateNewsController } from "../modules/News/useCases/createNews/CreateNewsController";
import { DeleteNewsController } from "../modules/News/useCases/deleteNews/DeleteNewsController";
import { GetAllNewsController } from "../modules/News/useCases/getAllNews/GetAllNewsController";
import { GetByIdNewsController } from "../modules/News/useCases/getByIdNews/GetByIdNewsController";
import { UpdateNewsController } from "../modules/News/useCases/updateNews/UpdateNewsController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const createNewsController = new CreateNewsController();
const getAllNewsController = new GetAllNewsController();
const getByIdNewsController = new GetByIdNewsController();
const updateNewsController = new UpdateNewsController();
const deleteNewsController = new DeleteNewsController();

const newsRoutes = Router();


newsRoutes.post("/", ensureAutheticated, ensureAdmin, createNewsController.handle)

newsRoutes.get("/", ensureAutheticated, getAllNewsController.handle)
newsRoutes.get("/:id", getByIdNewsController.handle)

newsRoutes.put("/", ensureAutheticated, ensureAdmin, updateNewsController.handle)

newsRoutes.delete("/:id", ensureAutheticated, ensureAdmin, deleteNewsController.handle)
export { newsRoutes }
import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/Category/useCases/createCategory/CreateCategoryController";
import { GetAllCategoriesController } from "../modules/Category/useCases/getAllCategory/GetAllCategoriesController";
import { UpdateCategoryController } from "../modules/Category/useCases/updateCategory/UpdateCategoryController";
import { UploadImageController } from "../modules/uploadImage/UploadImageController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const getAllcategoriesController = new GetAllCategoriesController();

categoryRoutes.get("/", getAllcategoriesController.handle);

categoryRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createCategoryController.handle
);
categoryRoutes.put(
  "/",
  ensureAutheticated,
  ensureAdmin,
  updateCategoryController.handle
);

export { categoryRoutes };

import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/Category/useCases/createCategory/CreateCategoryController";
import { UploadImageController } from "../modules/uploadImage/UploadImageController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoryRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createCategoryController.handle
);

export { categoryRoutes };

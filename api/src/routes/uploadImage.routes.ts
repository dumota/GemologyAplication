import { Router } from "express";
import multer from "multer";
import { UploadImageController } from "../modules/uploadImage/UploadImageController";

const uploadImageRoutes = Router();

const uplaodImageController = new UploadImageController();

uploadImageRoutes.post(
  "/",
  multer().single("file"),
  uplaodImageController.handle
);

export { uploadImageRoutes };

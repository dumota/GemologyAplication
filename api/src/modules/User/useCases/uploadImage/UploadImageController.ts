import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { UploadFile } from "../../../../shared/providers/UploadFile";

export class UploadImageController {
  async handle(req: Request, res: Response) {
    const photo = req.file;
    if (!photo) {
      throw new AppError("Adicione a imagem");
    }
    const uploadFile = new UploadFile();
    const result = await uploadFile.uploadPhoto(photo);
    console.log(result);
  }
}

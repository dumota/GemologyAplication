import { IUploadFile } from "../IUploadFile";
const cloudinary = require("cloudinary").v2;
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();
import path from "path";

export class UploadFile implements IUploadFile {
  async uploadPhoto(file: Blob | File | any): Promise<string> {
    const extName = path.extname(file.originalname).toString();
    const file64 = parser.format(extName, file.buffer);

    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const res = await cloudinary.uploader.upload(
      file64.content!,
      { folder: "GemologyProject" },
      (error: any, result: any) => {
        console.log(result, error);
      }
    );

    return res.secure_url;
  }
}

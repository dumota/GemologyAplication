import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const category = await createCategoryUseCase.execute(data);
    res.status(201).json(category);
  }
}

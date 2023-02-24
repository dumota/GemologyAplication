import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCategoriesUseCase } from "./GetAllCategoriesUseCase";

export class GetAllCategoriesController {
  async handle(req: Request, res: Response) {
    const getAllCategoriesUseCase = container.resolve(GetAllCategoriesUseCase);
    const categories = await getAllCategoriesUseCase.execute();
    res.status(200).json(categories);
  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
    const category = await updateCategoryUseCase.execute(data);
    res.status(201).json(category);
  }
}

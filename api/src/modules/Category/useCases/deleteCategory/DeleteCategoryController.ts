import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryuseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const deleteUseCase = container.resolve(DeleteCategoryuseCase);
    const deleted = await deleteUseCase.execute(id);
    res.status(200).json(deleted);
  }
}

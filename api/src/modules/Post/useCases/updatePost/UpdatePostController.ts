import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  async handle(req: Request, res: Response) {
    const { id } = req.user;
    const data = req.body;

    const updatePostUseCase = container.resolve(UpdatePostUseCase);
    const postUpdated = await updatePostUseCase.execute(data, id);

    res.status(200).json(postUpdated);
  }
}

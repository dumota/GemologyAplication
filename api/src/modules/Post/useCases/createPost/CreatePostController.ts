import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const { id } = req.user;

    const createPostUseCase = container.resolve(CreatePostUseCase);
    const post = await createPostUseCase.excute(data, id);
    res.status(201).json(post);
  }
}

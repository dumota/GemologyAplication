import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const createPostUseCase = container.resolve(CreatePostUseCase);
    await createPostUseCase.excute(data);
  }
}

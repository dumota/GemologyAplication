import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetRandomPostsUseCase } from "./GetRandomPostsUseCase";

export class GetRandomPostsController {
  async handle(req: Request, res: Response) {
    const getRandomPostUseCase = container.resolve(GetRandomPostsUseCase);
    const allposts = await getRandomPostUseCase.execute();
    res.status(200).json(allposts);
  }
}

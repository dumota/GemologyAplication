import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByIdUseCase } from "./findUserByIdUseCase";

export class FindUserByIdController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);
    const user = await findUserByIdUseCase.execute(id as string);

    res.status(200).json(user);
  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const id = req.params.id;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updateUser = updateUserUseCase.execute(data, id);
    res.status(200).json(updateUser);
  }
}

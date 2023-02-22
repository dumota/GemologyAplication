import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute(data);
    return res.status(201).json(user);
  }
}

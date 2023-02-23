import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
    const users = await getAllUsersUseCase.execute();
    res.status(200).json(users);
  }
}

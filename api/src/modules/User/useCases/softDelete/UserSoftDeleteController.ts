import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserSoftDeleteUseCase } from "./UserSoftDeleteUseCase";

export class UserSoftDeleteController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const userSoftDeleteUseCase = container.resolve(UserSoftDeleteUseCase);
    const msg = await userSoftDeleteUseCase.execute(id);
    console.log(msg);

    res.status(200).json(msg);
  }
}

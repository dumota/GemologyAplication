import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUserUseCase } from "./LoginUserUseCase";

export interface dataLogin {
  email: string;
  password: string;
}

class LoginUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const loginUserUseCase = container.resolve(LoginUserUseCase);
    const tokenReposnse = await loginUserUseCase.execute(email, password);
    return res.json(tokenReposnse);
  }
}

export { LoginUserController };

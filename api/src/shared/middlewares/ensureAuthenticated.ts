import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";
import { UserRepository } from "../../modules/User/repositories/implementantion/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAutheticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Autentição invalida!", 401);
  }
  const [, token] = authHeader.split(" ");
  const { sub: user_id } = verify(
    token,
    process.env.SECRET_WORD as string
  ) as IPayload;

  const usersRepository = new UserRepository();
  const user = await usersRepository.findById(user_id);

  if (!user) {
    throw new AppError("Token is invalid", 401);
  }

  req.user = {
    id: user_id,
  };

  next();
}

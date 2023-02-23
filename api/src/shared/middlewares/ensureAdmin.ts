import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { UserRepository } from "../../modules/User/repositories/implementantion/UserRepository";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user_id = req.user.id;
  const usersRepository = new UserRepository();
  const user = await usersRepository.findById(user_id);

  if (user.typeUser != "admin") {
    throw new AppError("User is not Admin", 401);
  }

  return next();
}

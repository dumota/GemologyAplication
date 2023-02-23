import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class LoginUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}

  async execute(email: string, password: string) {
    const tokenReposnse = await this._userRepository.login(email, password);
    if (!tokenReposnse) {
      throw new AppError("Login ou senha invalidos!");
    }
    return tokenReposnse;
  }
}

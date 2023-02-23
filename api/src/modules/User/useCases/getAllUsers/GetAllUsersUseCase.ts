import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class GetAllUsersUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}

  async execute() {
    const users = await this._userRepository.getAll();
    if (!users) {
      throw new AppError("Nenhum usuario foi encontrado!");
    }

    return users;
  }
}

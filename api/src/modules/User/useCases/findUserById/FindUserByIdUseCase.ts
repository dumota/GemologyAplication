import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class FindUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}

  async execute(id: string) {
    const user = await this._userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuario não encontrado!", 404);
    }
    return user;
  }
}

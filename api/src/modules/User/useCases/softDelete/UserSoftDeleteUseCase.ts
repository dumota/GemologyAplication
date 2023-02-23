import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class UserSoftDeleteUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}
  async execute(id: string) {
    const user = await this._userRepository.findById(id);
    if (!user) {
      throw new AppError("Usuario nâo encontrado!", 404);
    }
    const msg = await this._userRepository.softDeleteUser(id);
    return msg;
  }
}

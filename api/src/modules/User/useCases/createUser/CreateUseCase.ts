import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this._userRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new AppError("Usuario ja existe");
    }

    const passwordHash = await hash(data.password, 8);
    data.password = passwordHash;
    const user = await this._userRepository.register(data);
    return user;
  }
}

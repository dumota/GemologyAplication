import { inject, injectable } from "tsyringe";
import { IUserModel } from "../../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Encrypt } from "../../../../shared/providers/EncryptPassword/index";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly _userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserDTO, id: string) {
    if (data.password) {
      const encriptyClass = new Encrypt();
      const pass = await encriptyClass.encripty(data.password);
      data.password = pass;
    }
    const updateUser = await this._userRepository.update(data, id);
    return updateUser;
  }
}

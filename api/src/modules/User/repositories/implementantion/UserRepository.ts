import { IUserModel } from "../../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import UserModel from "../../../../Database/Mongo_Db/schemas/UserModel";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUserModel> {
    const user = await UserModel.findOne({ email: email });
    return user as IUserModel | any;
  }

  async create(data: ICreateUserDTO): Promise<IUserModel> {
    const user = await new UserModel({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      photoUrl: data.photoUrl,
      status: true,
      typeUser: "User",
    });

    const res = user.save();
    return res;
  }
}

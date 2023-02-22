import { IUserModel } from "../../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository, msg } from "../IUserRepository";
import UserModel from "../../../../Database/Mongo_Db/schemas/UserModel";

export class UserRepository implements IUserRepository {
  update(data: ICreateUserDTO): Promise<IUserModel> {
    throw new Error("Method not implemented.");
  }
  softDeleteUser(id: string): Promise<msg> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<IUserModel[]> {
    const user = await UserModel.find({});
    return user;
  }
  findById(id: string): Promise<IUserModel> {
    throw new Error("Method not implemented.");
  }
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

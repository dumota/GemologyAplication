import { IUserModel } from "../../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IReponse, IUserRepository, msg } from "../IUserRepository";
import UserModel from "../../../../Database/Mongo_Db/schemas/UserModel";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class UserRepository implements IUserRepository {
  async register(data: ICreateUserDTO): Promise<IUserModel> {
    const user = await new UserModel({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      photoUrl: data.photoUrl,
      status: true,
      typeUser: "User",
    });

    const res = await user.save();
    res.password = "";
    return res;
  }

  async login(email: string, password: string): Promise<IReponse | any> {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      throw new AppError("Email ou senha invalidos!");
    }
    const passwordMatch = await compare(password, user.password as string);

    if (!passwordMatch) {
      throw new AppError("Email ou senha invalidos!");
    }
    console.log(user);

    const token = sign({}, process.env.SECRET_WORD as string, {
      subject: user.id as string,
      expiresIn: "1d",
    });

    console.log(token);

    const tokenResponse: IReponse = {
      user: {
        name: user.name,
        email,
      },
      token,
    };
    return tokenResponse;
  }
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
}

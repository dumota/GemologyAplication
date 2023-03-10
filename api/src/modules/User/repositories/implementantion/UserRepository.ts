import { IUserModel } from "../../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IReponse, IUserRepository } from "../IUserRepository";
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
  async update(data: ICreateUserDTO, id: string): Promise<IUserModel> {
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      throw new AppError("Usuario não encontrado", 404);
    }
    const userUpdate = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    console.log(userUpdate);

    const { password, ...other } = userUpdate?._doc as ICreateUserDTO;
    return other as IUserModel;
  }
  async softDeleteUser(id: string): Promise<string> {
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      throw new AppError("Usuario não encontrado!", 404);
    }

    await user.updateOne({ status: !user.status });

    const message = user.status
      ? "Usuario Inativado com sucesso!"
      : "Usuario ativo com sucesso!";
    return message as string;
  }
  async getAll(): Promise<IUserModel[]> {
    const user = await UserModel.find();

    return user;
  }
  async findById(id: string): Promise<IUserModel> {
    const user = await UserModel.findById({ _id: id }, { password: 0 });
    if (!user) {
      throw new AppError("Usuario não encontrado", 404);
    }

    return user;
  }
  async findByEmail(email: string): Promise<IUserModel> {
    const user = await UserModel.findOne({ email: email });
    return user as IUserModel | any;
  }
}

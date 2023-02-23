import { IUserModel } from "../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface msg {
  msg: string;
}

export interface params {
  name?: string;
}
export interface IReponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface IUserRepository {
  register(data: ICreateUserDTO): Promise<IUserModel>;
  login(email: string, password: string): Promise<IReponse>;
  update(data: ICreateUserDTO, id: string): Promise<IUserModel>;
  softDeleteUser(id: string): Promise<msg>;
  getAll(parmas: params): Promise<IUserModel[]>;
  findByEmail(email: string): Promise<IUserModel>;
  findById(id: string): Promise<IUserModel>;
}

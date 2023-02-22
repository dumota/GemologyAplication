import { IUserModel } from "../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface msg {
  msg: string;
}

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserModel>;
  update(data: ICreateUserDTO): Promise<IUserModel>;
  softDeleteUser(id: string): Promise<msg>;
  getAll(): Promise<IUserModel[]>;
  findByEmail(email: string): Promise<IUserModel>;
  findById(id: string): Promise<IUserModel>;
}

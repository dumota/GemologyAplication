import { IUserModel } from "../../../Database/Mongo_Db/ISchemas/IUserModel";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserModel>;
  findByEmail(email: string): Promise<IUserModel>;
}

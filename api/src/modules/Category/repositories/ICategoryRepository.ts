import { ICategoryModel } from "../../../Database/Mongo_Db/ISchemas/ICategoryModel";

export interface ICategoryRepository {
  create(data: ICategoryModel): Promise<ICategoryModel>;
  update(data: ICategoryModel): Promise<ICategoryModel>;
  findById(id: string): Promise<ICategoryModel>;
  getAll(): Promise<ICategoryModel[]>;
  delete(id: string): Promise<string>;
  getByName(name: string): Promise<ICategoryModel>;
}

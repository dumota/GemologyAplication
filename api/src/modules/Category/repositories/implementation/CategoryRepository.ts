import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import { ICategoryRepository } from "../ICategoryRepository";
import CategoryModel from "../../../../Database/Mongo_Db/schemas/CategoryModel";

export class CategoryRepository implements ICategoryRepository {
  async create(data: ICategoryModel): Promise<ICategoryModel> {
    const categoryObject = await new CategoryModel({
      name: data.name,
    });

    const category = await categoryObject.save();
    return category;
  }
  update(data: ICategoryModel, id: string): Promise<ICategoryModel> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<ICategoryModel> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ICategoryModel[]> {
    throw new Error("Method not implemented.");
  }
  async getByName(name: string): Promise<ICategoryModel> {
    const category = await CategoryModel.findOne({ name: name });
    return category as ICategoryModel;
  }
  delete(id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

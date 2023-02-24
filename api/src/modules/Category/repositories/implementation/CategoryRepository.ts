import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import { ICategoryRepository } from "../ICategoryRepository";
import CategoryModel from "../../../../Database/Mongo_Db/schemas/CategoryModel";

export class CategoryRepository implements ICategoryRepository {
  async create(data: ICategoryModel): Promise<ICategoryModel> {
    const categoryObject = await new CategoryModel({
      name: data.name.toLowerCase(),
    });

    const category = await categoryObject.save();
    return category;
  }
  async update(data: ICategoryModel): Promise<ICategoryModel> {
    const category = await CategoryModel.findByIdAndUpdate(
      data._id,
      {
        $set: data,
      },
      { new: true }
    );

    return category as ICategoryModel;
  }
  async findById(id: string): Promise<ICategoryModel> {
    const category = await CategoryModel.findById({ _id: id });
    return category as ICategoryModel;
  }
  async getAll(): Promise<ICategoryModel[]> {
    const categories = await CategoryModel.find({});

    return categories;
  }
  async getByName(name: string): Promise<ICategoryModel> {
    const category = await CategoryModel.findOne({ name: name });
    return category as ICategoryModel;
  }
  async delete(id: string): Promise<string> {
    const deletedCategory = await CategoryModel.findByIdAndDelete({ _id: id });

    const msg = "Categoria excluida com sucesso";

    return msg;
  }
}

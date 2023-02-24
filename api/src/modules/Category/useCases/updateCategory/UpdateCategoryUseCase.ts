import { inject, injectable } from "tsyringe";
import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import CategoryModel from "../../../../Database/Mongo_Db/schemas/CategoryModel";
import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private readonly _categoryRepository: ICategoryRepository
  ) {}

  async execute(data: ICategoryModel) {
    const categoryExists = await this._categoryRepository.findById(data._id);
    if (!categoryExists) {
      throw new AppError("Categoria não encontrada!", 404);
    }
    const categoryUpdate = await this._categoryRepository.update(data);
    return categoryUpdate;
  }
}

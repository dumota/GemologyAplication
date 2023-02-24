import { inject, injectable } from "tsyringe";
import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class GetAllCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private readonly _categoryRepository: ICategoryRepository
  ) {}

  async execute() {
    const categories = this._categoryRepository.getAll();
    if (!categories) {
      throw new AppError("Nenguma categoria foi encontrada!");
    }
    return categories;
  }
}

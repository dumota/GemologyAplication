import { inject, injectable } from "tsyringe";
import { ICategoryModel } from "../../../../Database/Mongo_Db/ISchemas/ICategoryModel";
import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private readonly _categoryRepository: ICategoryRepository
  ) {}

  async execute(data: ICategoryModel) {
    const categoryAlreadyExists = await this._categoryRepository.getByName(
      data.name
    );
    if (categoryAlreadyExists) {
      throw new AppError("Esta categoria ja existe!");
    }
    const category = await this._categoryRepository.create(data);
    return category;
  }
}

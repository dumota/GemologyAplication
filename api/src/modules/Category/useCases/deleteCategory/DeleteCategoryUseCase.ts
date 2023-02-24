import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class DeleteCategoryuseCase {
  constructor(
    @inject("CategoryRepository")
    private readonly _categoryRepository: ICategoryRepository
  ) {}

  async execute(id: string) {
    const categoryExists = await this._categoryRepository.findById(id);
    if (!categoryExists) {
      throw new AppError("Categoria não encontrada");
    }
    const deleteSucess = await this._categoryRepository.delete(id);
    return deleteSucess;
  }
}

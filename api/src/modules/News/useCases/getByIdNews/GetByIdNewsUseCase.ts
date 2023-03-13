import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { INewsRepository } from "../../repositories/INewsRepository";

@injectable()
export class GetByIdUseCase {
    constructor(
        @inject('NewsRepository')
        private readonly _newsRepository: INewsRepository
    ) { }

    async execute(id: string) {

        const result = await this._newsRepository.getById(id)
        if (!result) {
            throw new AppError("Não foi encontrado nenhuma noticia", 404);
        }
        return result;
    }
}
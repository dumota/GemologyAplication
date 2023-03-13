import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { INewsRepository } from "../../repositories/INewsRepository";

@injectable()
export class GetNewsUseCase {

    constructor(
        @inject('NewsRepository')
        private readonly _newsRepository: INewsRepository
    ) { }

    async execute() {
        const result = this._newsRepository.getAll()
        if (!result) {
            throw new AppError("Não existem noticias cadastradas!");
        }

        return result;
    }
}
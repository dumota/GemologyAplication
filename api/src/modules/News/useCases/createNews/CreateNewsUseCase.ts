import { inject, injectable } from "tsyringe";
import { INewsModel } from "../../../../Database/Mongo_Db/ISchemas/INewsModel";
import { AppError } from "../../../../errors/AppError";
import { INewsRepository } from "../../repositories/INewsRepository";

@injectable()
export class CreateNewsUseCase {

    constructor(
        @inject('NewsRepository')
        private readonly _newsrepository: INewsRepository
    ) { }

    async execute(data: INewsModel) {
        const news = await this._newsrepository.create(data)
        if (!news) {
            throw new AppError("Não foi possivel criar seu anuncio , reveja os campos");

        }
        return news;
    }
}
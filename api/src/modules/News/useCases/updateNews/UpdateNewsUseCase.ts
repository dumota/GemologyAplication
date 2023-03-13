import { inject, injectable } from "tsyringe";
import { INewsModel } from "../../../../Database/Mongo_Db/ISchemas/INewsModel";
import { IPostModel } from "../../../../Database/Mongo_Db/ISchemas/IPostModel";
import { INewsRepository } from "../../repositories/INewsRepository";

@injectable()
export class UpdateNewsUseCase {

    constructor(
        @inject("NewsRepository")
        private readonly _newsRepository: INewsRepository
    ) { }

    async execute(data: INewsModel) {
        const result = await this._newsRepository.update(data)
        return result;
    }
}
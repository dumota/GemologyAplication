import { inject, injectable } from "tsyringe";
import { INewsRepository } from "../../repositories/INewsRepository";

@injectable()
export class DeleteNewsUseCase {
    constructor(
        @inject('NewsRepository')
        private readonly _newsRepository: INewsRepository
    ) { }

    async execute(id: string) {
        const msg = this._newsRepository.delete(id)
        return msg;
    }
}
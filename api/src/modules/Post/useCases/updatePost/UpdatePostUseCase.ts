import { inject, injectable } from "tsyringe";
import { FieldValidation } from "../../../../shared/middlewares/validation/FieldValidation";
import { IPostDTO } from "../../dtos/IPostDTO";
import { IPostRepository } from "../../repositories/IPostRepository";

@injectable()
export class UpdatePostUseCase {
  constructor(
    @inject("PostRepository")
    private readonly _PostRepository: IPostRepository
  ) {}

  async execute(data: IPostDTO, id: string) {
    const fieldValidation = new FieldValidation();
    await fieldValidation.postIsFromUser(data, id);
    const post = await this._PostRepository.update(data);
    return post;
  }
}

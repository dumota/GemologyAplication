import { inject, injectable } from "tsyringe";
import { FieldValidation } from "../../../../shared/middlewares/validation/FieldValidation";
import { IPostDTO } from "../../dtos/IPostDTO";
import { IPostRepository } from "../../repositories/IPostRepository";

@injectable()
export class CreatePostUseCase {
  constructor(
    @inject("PostRepository")
    private readonly _postRepository: IPostRepository
  ) {}

  async excute(data: IPostDTO, id: string) {
    const fieldValidation = new FieldValidation();
    await fieldValidation.validate(data);
    const post = await this._postRepository.create(data, id);
    return post;
  }
}

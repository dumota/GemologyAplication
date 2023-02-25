import { inject, injectable } from "tsyringe";
import { IPostRepository } from "../../repositories/IPostRepository";

@injectable()
export class GetRandomPostsUseCase {
  constructor(
    @inject("PostRepository")
    private readonly _postRepository: IPostRepository
  ) {}

  async execute() {
    const posts = await this._postRepository.getRandomPostWithUser();

    return posts;
  }
}

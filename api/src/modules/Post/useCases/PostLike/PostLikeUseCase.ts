import { inject, injectable } from "tsyringe";
import { IPostModel } from "../../../../Database/Mongo_Db/ISchemas/IPostModel";
import { IPostRepository } from "../../repositories/IPostRepository";


@injectable()
export class PostLikeUseCase{
    constructor(
        @inject('PostRepository')
        private readonly _postRepository:IPostRepository
    ){}

    async execute(id:string, user_id:string){
        const postLiked = await this._postRepository.postLike(id, user_id);
        return postLiked;
    }
}
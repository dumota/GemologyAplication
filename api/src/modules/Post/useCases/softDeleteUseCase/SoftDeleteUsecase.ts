import { inject, injectable } from "tsyringe";
import { IPostRepository } from "../../repositories/IPostRepository";

@injectable()
export class SoftDeleteUseCase{
    constructor(
        @inject('PostRepository')
        private readonly _postRepository:IPostRepository
    ){}

    async execute(id:string){
        const post =await this._postRepository.softDelete(id)
        console.log(post);
        
        return post;
    }
}
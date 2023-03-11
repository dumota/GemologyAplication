import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IPostRepository } from "../../repositories/IPostRepository";


@injectable()
export class GetPostByUserUseCase{
    constructor(
        @inject('PostRepository')
        private readonly _getPostByUserRepository: IPostRepository
    ){}

    async execute(id:string){
        const posts =await this._getPostByUserRepository.getPostsByUser(id)
    
        
        if(posts.length <= 0 ){
            throw new AppError("nenhum post foi encontrado",404);
            
        }
        return posts;
    }
}
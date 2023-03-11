import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPostByUserUseCase } from "./GetPostsByUserUseCase";


export class GetPostsByUserController{

    async handle(req:Request, res:Response){
        const id = req.params.id;
        const getPostByUserUseCase = container.resolve(GetPostByUserUseCase);

        const posts = await getPostByUserUseCase.execute(id)
        res.status(200).json(posts)
    }
}
import { Request, Response } from "express";
import { container } from "tsyringe";
import { PostLikeUseCase } from "./PostLikeUseCase";


export class PostLikeController{

    async handle(req:Request ,res:Response){
        const postLikeUseCase = container.resolve(PostLikeUseCase);
        const idPost = req.params.id
        const iduser = req.user.id

        const postLiked = await postLikeUseCase.execute(idPost, iduser);
        res.status(201).json(postLiked)
    }
}
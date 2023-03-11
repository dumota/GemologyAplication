import { Request, Response } from "express";
import { container } from "tsyringe";
import { AvaliationUseCase } from "./AvaliationUseCase";



export class AvaliationController{

    async handle(req:Request, res:Response){
        const avaliationUseCase = container.resolve(AvaliationUseCase);
        const id = req.params.id
        const postAvailable =await avaliationUseCase.execute(id)
        res.status(200).json(postAvailable)
    }
}
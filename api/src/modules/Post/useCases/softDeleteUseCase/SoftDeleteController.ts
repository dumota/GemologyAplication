import { Request, Response } from "express";
import { container } from "tsyringe";
import { SoftDeleteUseCase } from "./SoftDeleteUsecase";


export class SoftDeleteController{

    async handle(req:Request, res:Response){
        
        const softDeleteUseCase = container.resolve(SoftDeleteUseCase);
        const id = req.params.id
    
        const message =  await softDeleteUseCase.execute(id);
        res.status(200).json(message)
    }
}
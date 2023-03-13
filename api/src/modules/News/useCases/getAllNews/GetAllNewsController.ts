import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetNewsUseCase } from "./GetNewsUseCase";


export class GetAllNewsController {

    async handle(req: Request, res: Response) {
        const getAllNewsUseCase = container.resolve(GetNewsUseCase);
        const result = await getAllNewsUseCase.execute()
        res.status(200).json(result)
    }
}
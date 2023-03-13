import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetByIdUseCase } from "./GetByIdNewsUseCase";


export class GetByIdNewsController {

    async handle(req: Request, res: Response) {
        const id = req.params.id
        const getByIdNewsUseCase = container.resolve(GetByIdUseCase)
        const result = await getByIdNewsUseCase.execute(id)
        res.status(200).json(result)
    }
}
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";


export class DeleteNewsController {

    async handle(req: Request, res: Response) {
        const deleteNewsUseCase = container.resolve(DeleteNewsUseCase)
        const id = req.params.id

        const msg = await deleteNewsUseCase.execute(id)
        res.status(200).json(msg)
    }
}
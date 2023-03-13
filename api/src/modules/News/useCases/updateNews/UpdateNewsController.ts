import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateNewsUseCase } from "./UpdateNewsUseCase";


export class UpdateNewsController {

    async handle(req: Request, res: Response) {
        const updateNewsUseCase = container.resolve(UpdateNewsUseCase);
        const data = req.body;
        const result = await updateNewsUseCase.execute(data);
        res.status(200).json(result);

    }
}
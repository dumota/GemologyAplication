import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewsUseCase } from "./CreateNewsUseCase";


export class CreateNewsController {

    async handle(req: Request, res: Response) {
        const createNewsUseCase = container.resolve(CreateNewsUseCase);
        const newsData = req.body
        const idUser = req.user.id
        console.log(idUser);

        const data = { ...newsData, idUser };
        const result = await createNewsUseCase.execute(data)
        res.status(201).json(result);


    }
}
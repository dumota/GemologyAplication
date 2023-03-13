import { INewsModel } from "../../../../Database/Mongo_Db/ISchemas/INewsModel";
import { INewsRepository } from "../INewsRepository";


export class NewsRepository implements INewsRepository {
    create(data: INewsModel): Promise<INewsModel> {
        throw new Error("Method not implemented.");
    }
    update(data: INewsModel): Promise<INewsModel> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<INewsModel[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<INewsModel[]> {
        throw new Error("Method not implemented.");
    }

}
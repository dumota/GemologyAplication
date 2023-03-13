import { INewsModel } from "../../../../Database/Mongo_Db/ISchemas/INewsModel";
import NewsModel from "../../../../Database/Mongo_Db/schemas/NewsModel";
import { INewsRepository } from "../INewsRepository";


export class NewsRepository implements INewsRepository {
    async create(data: INewsModel): Promise<INewsModel> {
        const createNews = new NewsModel({
            name: data.name,
            title: data.title,
            content: data.content,
            photoUrl: data.photoUrl,
            createdBy: data.createdBy
        });
        await createNews.save();
        return createNews as INewsModel;
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
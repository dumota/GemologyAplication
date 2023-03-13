import { INewsModel } from "../../../Database/Mongo_Db/ISchemas/INewsModel";

export interface INewsRepository {
    create(data: INewsModel): Promise<INewsModel>
    update(data: INewsModel): Promise<INewsModel>
    delete(id: string): Promise<string>
    getAll(): Promise<INewsModel[]>
    getById(id: string): Promise<INewsModel[]>
}
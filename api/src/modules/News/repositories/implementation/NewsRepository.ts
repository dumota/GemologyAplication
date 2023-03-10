import mongoose from "mongoose";
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

    async update(data: INewsModel): Promise<INewsModel> {

        const newsData = await NewsModel.findByIdAndUpdate(
            data._id,
            {
                $set: data,
            },
            { new: true }
        );



        return newsData as INewsModel;
    }

    async delete(id: string): Promise<string> {
        await NewsModel.findByIdAndDelete({ _id: id })
        const msg = 'Noticia excluida com sucesso!'
        return msg;
    }

    async getAll(): Promise<INewsModel[]> {
        const ALLNotices = await NewsModel.aggregate([

            {
                $lookup: {
                    from: "users",
                    let: { user_id: "$createdBy" },
                    pipeline: [
                        { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                        { $project: { password: 0 } }
                    ],
                    as: "user"
                }
            },

        ])

        return ALLNotices;
    }

    async getById(id: string): Promise<INewsModel[]> {
        const data = await NewsModel.aggregate([
            {
                $facet: {
                    totalData: [

                        {
                            $match: {
                                _id: mongoose.Types.ObjectId(id)
                            }
                        },
                        // User
                        {
                            $lookup: {
                                from: "users",
                                let: { user_id: "$createdBy" },
                                pipeline: [
                                    { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
                                    { $project: { password: 0 } }
                                ],
                                as: "user"
                            }
                        },
                        // array -> object
                        { $unwind: "$user" },


                    ],
                }
            }
        ])

        return data;
    }

}
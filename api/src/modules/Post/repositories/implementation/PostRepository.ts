import { IPostModel } from "../../../../Database/Mongo_Db/ISchemas/IPostModel";
import PostModel from "../../../../Database/Mongo_Db/schemas/PostModel";
import { IPostDTO } from "../../dtos/IPostDTO";
import { IPostRepository } from "../IPostRepository";

export class PostRepository implements IPostRepository {
  async create(data: IPostDTO, idUser: string): Promise<IPostModel> {
    const newPost = new PostModel({
      user: idUser,
      title: data.title.toLowerCase(),
      content: data.content,
      thumbnail: data.thumbnail,
      category: data.category,
    });
    await newPost.save();
    return newPost;
  }
  async update(data: IPostDTO): Promise<IPostModel | any> {
    const postUpdate = await PostModel.findByIdAndUpdate(
      data._id,
      {
        $set: data,
      },
      { new: true }
    );

    return postUpdate as IPostModel;
  }
  softDelete(id: string): string {
    throw new Error("Method not implemented.");
  }
  getRandomPostWithUser(): Promise<IPostModel[]> {
    throw new Error("Method not implemented.");
  }
  getByIdWithUser(id: string): Promise<IPostModel> {
    throw new Error("Method not implemented.");
  }
  getPostsByUser(id: string): Promise<IPostModel[]> {
    throw new Error("Method not implemented.");
  }
  updateAvaliation(id: string): Promise<IPostModel> {
    throw new Error("Method not implemented.");
  }
  postLike(data: IPostDTO): Promise<IPostModel> {
    throw new Error("Method not implemented.");
  }
}

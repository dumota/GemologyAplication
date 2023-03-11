import { json } from "body-parser";
import { IPostModel } from "../../../../Database/Mongo_Db/ISchemas/IPostModel";
import PostModel from "../../../../Database/Mongo_Db/schemas/PostModel";
import { AppError } from "../../../../errors/AppError";
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


  async softDelete(id: string): Promise<string> {
    const post = await PostModel.findById({ _id: id });
 
    if (!post) {
      throw new AppError("Post Não encontrado!", 404);
    }

    await post.updateOne({ status: !post.status });

    const message = post.status
      ? "Post Inativado com sucesso!"
      : "Post ativo com sucesso!";
    return message as string;
  }


  async getRandomPostWithUser(): Promise<IPostModel[]> {
    try {
      const posts = await PostModel.aggregate([
        //user
        {
          $lookup: {
            from: "users",
            let: { user_id: "$user" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
              { $project: { password: 0 } },
            ],
            as: "user",
          },
        },

        //array -> obejct
        { $unwind: "$user" },

        //Category
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "category",
          },
        },
        //array -> object
        { $unwind: "$category" },
        { $match: { $expr: { $lt: [0.5, { $rand: {} }] } } },
      ]);

      return posts;
    } catch (err: any) {
      throw new Error(err);
    }
  }


  getByIdWithUser(id: string): Promise<IPostModel> {
    throw new Error("Method not implemented.");
  }


  async getPostsByUser(id: string): Promise<IPostModel[]> {
    const postsByUser = await PostModel.find({user:id})
    return postsByUser;
  }

  updateAvaliation(id: string): Promise<IPostModel> {
    throw new Error("Method not implemented.");
  }

  async postLike(id: string, user_id:string): Promise<IPostModel|any> {
    try {
      
      const isLiked = await PostModel.find({_id:id, likes:user_id})
      console.log(isLiked);
      
      if(isLiked.length <= 0){
        const likedBlog = await PostModel.findByIdAndUpdate({_id:id},
          {
            $push:{likes: user_id}
          },
          {
            new:true
          }
        )

        return likedBlog;
      }else{
        const deslikeBlog = await PostModel.findByIdAndUpdate({_id:id},
          {
            $pull:{likes: user_id}
          },
          {
            new:true
          }
        )
        return deslikeBlog;
      }


      


    } catch (error) {
      console.log(error);
      
    }
  }
}

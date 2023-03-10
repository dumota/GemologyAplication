import { IPostModel } from "../../../Database/Mongo_Db/ISchemas/IPostModel";
import { IPostDTO } from "../dtos/IPostDTO";

export interface IPostRepository {
  create(data: IPostDTO, idUser: string): Promise<IPostModel>;
  update(data: IPostDTO): Promise<IPostModel>;
  softDelete(id: string): Promise<string>;
  getRandomPostWithUser(): Promise<IPostModel[]>;
  getPostsByUser(id: string): Promise<IPostModel[]>;
  updateAvaliation(id: string): Promise<IPostModel>;
  postLike(id:string,user_id:string): Promise<IPostModel>;
}

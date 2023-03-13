import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/Category/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/Category/repositories/implementation/CategoryRepository";
import { NewsRepository } from "../../modules/News/repositories/implementation/NewsRepository";
import { INewsRepository } from "../../modules/News/repositories/INewsRepository";
import { PostRepository } from "../../modules/Post/repositories/implementation/PostRepository";
import { IPostRepository } from "../../modules/Post/repositories/IPostRepository";
import { UserRepository } from "../../modules/User/repositories/implementantion/UserRepository";
import { IUserRepository } from "../../modules/User/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
container.registerSingleton<IPostRepository>("PostRepository", PostRepository);
container.registerSingleton<INewsRepository>("NewsRepository", NewsRepository);

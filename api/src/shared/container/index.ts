import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/Category/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/Category/repositories/implementation/CategoryRepository";
import { UserRepository } from "../../modules/User/repositories/implementantion/UserRepository";
import { IUserRepository } from "../../modules/User/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

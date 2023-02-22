import { container } from "tsyringe";
import { UserRepository } from "../../modules/User/repositories/implementantion/UserRepository";
import { IUserRepository } from "../../modules/User/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

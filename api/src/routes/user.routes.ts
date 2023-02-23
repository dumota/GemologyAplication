import { Router } from "express";
import { CreateUserController } from "../modules/User/useCases/createUser/CreateUserController";
import { FindUserByIdController } from "../modules/User/useCases/findUserById/findUserByIdController";
import { LoginUserController } from "../modules/User/useCases/loginUser/LoginUserController";

const userRoutes = Router();
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const findUserByIdController = new FindUserByIdController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", loginUserController.handle);
userRoutes.get("/:id", findUserByIdController.handle);

export { userRoutes };

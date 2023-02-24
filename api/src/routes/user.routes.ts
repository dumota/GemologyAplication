import { Router } from "express";
import { CreateUserController } from "../modules/User/useCases/createUser/CreateUserController";
import { FindUserByIdController } from "../modules/User/useCases/findUserById/findUserByIdController";
import { GetAllUsersController } from "../modules/User/useCases/getAllUsers/GetAllUsersController";
import { LoginUserController } from "../modules/User/useCases/loginUser/LoginUserController";
import { UserSoftDeleteController } from "../modules/User/useCases/softDelete/UserSoftDeleteController";
import { UpdateUserController } from "../modules/User/useCases/updateUser/UpdateUserController";
import { UploadImageController } from "../modules/User/useCases/uploadImage/UploadImageController";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { ensureAutheticated } from "../shared/middlewares/ensureAuthenticated";
import multer from "multer";

const userRoutes = Router();
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const findUserByIdController = new FindUserByIdController();
const updateUserController = new UpdateUserController();
const getAllUsersController = new GetAllUsersController();
const userSoftDeleteController = new UserSoftDeleteController();
const uplaodImageController = new UploadImageController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", loginUserController.handle);
userRoutes.post(
  "/upload",
  multer().single("file"),
  uplaodImageController.handle
);

userRoutes.get("/", getAllUsersController.handle);
userRoutes.get("/:id", findUserByIdController.handle);

userRoutes.put("/:id", ensureAutheticated, updateUserController.handle);
userRoutes.put(
  "/status/:id",
  ensureAutheticated,
  ensureAdmin,
  userSoftDeleteController.handle
);

export { userRoutes };

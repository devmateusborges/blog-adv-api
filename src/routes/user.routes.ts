import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserByEmailController } from "../modules/users/useCases/getAllUserByEmail/GetUserByEmailController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserByEmailController = new GetUserByEmailController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.get("/:email", getUserByEmailController.handle);

export { userRoutes };

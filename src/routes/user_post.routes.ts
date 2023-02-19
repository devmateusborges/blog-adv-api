import { Router } from "express";
import { CreateUserPostController } from "../modules/user_post/useCases/createUserPostGroup/CreateUserPostController";
import { DeleteUserPostByIDController } from "../modules/user_post/useCases/deleteUserPostById/DeleteUserPostByIDController";
import { GetAllUserPostController } from "../modules/user_post/useCases/getUserPostAll/GetAllUserPostController";

const createUserPostController = new CreateUserPostController();
const deleteUserPostByIDController = new DeleteUserPostByIDController();
const getAllUserPostController = new GetAllUserPostController();

const UserPostRoutes = Router();

UserPostRoutes.post("/", createUserPostController.handle);
UserPostRoutes.delete("/:id", deleteUserPostByIDController.handle);
UserPostRoutes.get(
  "/Ppage=:pPage&pPer_page=:pPer_Page",
  getAllUserPostController.handle
);
export { UserPostRoutes };

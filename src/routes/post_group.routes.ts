import { Router } from "express";
import { CreatePostGroupController } from "../modules/PostGroup/useCases/createPostGroup/CreatePostGroupController";
import { DeletePostGroupByIDController } from "../modules/postgroup/useCases/deletePostGroupById/DeleteGroupByIDController";
import { GetAllPostGroupController } from "../modules/postgroup/useCases/getGroupAll/GetAllPostGroupController";

const createPostGroupController = new CreatePostGroupController();
const deletePostGroupByIDController = new DeletePostGroupByIDController();
const getAllPostGroupController = new GetAllPostGroupController();

const postGroupRoutes = Router();

postGroupRoutes.post("/", createPostGroupController.handle);
postGroupRoutes.delete("/:id", deletePostGroupByIDController.handle);
postGroupRoutes.get(
  "/Ppage=:pPage&pPer_page=:pPer_Page",
  getAllPostGroupController.handle
);
export { postGroupRoutes };

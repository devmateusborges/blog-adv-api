import { Router } from "express";
import { CreatePostController } from "../modules/post/useCases/createPost/CreatePostController";
import { DeletePostByIDController } from "../modules/post/useCases/deletePostById/DeletePostByIDController";
import { GetPostByDateController } from "../modules/post/useCases/getPostByDate/GetPostByDateController";

const createPostController = new CreatePostController();
const getPostByDateController = new GetPostByDateController();
const deletePostByIDController = new DeletePostByIDController();

const postRoutes = Router();

postRoutes.post("/", createPostController.handle);
postRoutes.get(
  "/Ppage=:pPage&pPer_page=:pPer_Page",
  getPostByDateController.handle
);
postRoutes.delete("/:id", deletePostByIDController.handle);

export { postRoutes };

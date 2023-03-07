import { Router } from "express";
import { CreatePostController } from "../modules/post/useCases/createPost/CreatePostController";
import { DeletePostByIDController } from "../modules/post/useCases/deletePostById/DeletePostByIDController";
import { GetFilterPostController } from "../modules/post/useCases/getByFilter/GetFilterPostController";
import { GetPostByDateController } from "../modules/post/useCases/getPostByDate/GetPostByDateController";
import { GetPostByIdController } from "../modules/post/useCases/getPostById/GetPostByIdController";
import { UpdatePostController } from "../modules/post/useCases/updatePost/UpdatePostController";

const createPostController = new CreatePostController();
const getPostByDateController = new GetPostByDateController();
const deletePostByIDController = new DeletePostByIDController();
const getPostByIdController = new GetPostByIdController();
const updatePostController = new UpdatePostController();
const getFilterPostController = new GetFilterPostController();
const postRoutes = Router();

postRoutes.post("/", createPostController.handle);
postRoutes.get("/", getPostByDateController.handle);
postRoutes.post("/filter", getFilterPostController.handle);
postRoutes.get("/:id", getPostByIdController.handle);
postRoutes.delete("/update/:id", updatePostController.handle);
postRoutes.delete("/:id", deletePostByIDController.handle);

export { postRoutes };

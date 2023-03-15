import { Router } from "express";
import { PostController } from "../modules/post/useCases/PostController";
import { UserController } from "../modules/users/useCases/UserController";

const postController = new PostController();
const userController = new UserController();
const postRoutes = Router();

postRoutes.post("/", userController.authenticate, postController.createPost);
postRoutes.put(
  "/update/:id",
  userController.authenticate,
  postController.updatePost
);
postRoutes.delete(
  "/:id",
  userController.authenticate,
  postController.deletePost
);
postRoutes.get("/", postController.getPostAllOrderDate);
postRoutes.post("/filter", postController.getPostFilter);
postRoutes.get("/:id", postController.getPostById);

export { postRoutes };

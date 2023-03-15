import { Router } from "express";
import { UserController } from "../modules/users/useCases/UserController";

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.createUser);
userRoutes.put(
  "/update/:id",
  userController.authenticate,
  userController.updateUser
);
userRoutes.delete("/", userController.authenticate, userController.deleteUser);
userRoutes.get("/", userController.getUserAll);

userRoutes.get(
  "/:email",
  userController.authenticate,
  userController.getUserByEmail
);
userRoutes.post("/auth", userController.createToken);

export { userRoutes };

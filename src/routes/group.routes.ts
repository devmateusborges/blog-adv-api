import { Router } from "express";
import { GroupController } from "../modules/group/useCases/GroupController";
import { UserController } from "../modules/users/useCases/UserController";

const groupController = new GroupController();
const userController = new UserController();
const groupRoutes = Router();

groupRoutes.post("/", userController.authenticate, groupController.createGroup);
groupRoutes.get("/", groupController.getGroupAll);
groupRoutes.put(
  "/update/:id",
  userController.authenticate,
  groupController.updateGroup
);
groupRoutes.delete(
  "/:id",
  userController.authenticate,
  groupController.deleteGroup
);

groupRoutes.get("/:id", groupController.getGroupById);
groupRoutes.post(
  "/filter",
  userController.authenticate,
  groupController.getGroupFilter
);

export { groupRoutes };

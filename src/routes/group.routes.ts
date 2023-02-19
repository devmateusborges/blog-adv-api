import { Router } from "express";
import { CreateGroupController } from "../modules/group/useCases/createGroup/CreateGroupController";
import { DeleteGroupByIDController } from "../modules/group/useCases/deleteGroupById/DeleteGroupByIDController";
import { GetAllGroupController } from "../modules/group/useCases/getGroupAll/GetAllGroupController";

const createGroupController = new CreateGroupController();
const deleteGroupByIDController = new DeleteGroupByIDController();
const getAllGroupController = new GetAllGroupController();

const groupRoutes = Router();

groupRoutes.post("/", createGroupController.handle);
groupRoutes.delete("/:id", deleteGroupByIDController.handle);
groupRoutes.get(
  "/Ppage=:pPage&pPer_page=:pPer_Page",
  getAllGroupController.handle
);
export { groupRoutes };

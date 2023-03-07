import { Router } from "express";
import { CreateGroupController } from "../modules/group/useCases/createGroup/CreateGroupController";
import { DeleteGroupByIDController } from "../modules/group/useCases/deleteGroupById/DeleteGroupByIDController";
import { GetFilterGroupController } from "../modules/group/useCases/getByFilter/GetFilterGroupController";
import { GetAllGroupController } from "../modules/group/useCases/getGroupAll/GetAllGroupController";
import { GetGroupByIdController } from "../modules/group/useCases/getGroupById/GetGroupByIdController";
import { UpdateGroupController } from "../modules/group/useCases/updateGroup/UpdateGroupController";

const createGroupController = new CreateGroupController();
const deleteGroupByIDController = new DeleteGroupByIDController();
const getAllGroupController = new GetAllGroupController();
const getGroupByIdController = new GetGroupByIdController();
const updateGroupController = new UpdateGroupController();
const getFilterGroupController = new GetFilterGroupController();

const groupRoutes = Router();

groupRoutes.post("/", createGroupController.handle);
groupRoutes.delete("/:id", deleteGroupByIDController.handle);
groupRoutes.get("/", getAllGroupController.handle);
groupRoutes.post("/filter", getFilterGroupController.handle);
groupRoutes.get("/:id", getGroupByIdController.handle);
groupRoutes.put("/update/:id", updateGroupController.handle);
export { groupRoutes };

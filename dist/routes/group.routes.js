"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupRoutes = void 0;
var _express = require("express");
var _CreateGroupController = require("../modules/group/useCases/createGroup/CreateGroupController");
var _DeleteGroupByIDController = require("../modules/group/useCases/deleteGroupById/DeleteGroupByIDController");
var _GetAllGroupController = require("../modules/group/useCases/getGroupAll/GetAllGroupController");
const createGroupController = new _CreateGroupController.CreateGroupController();
const deleteGroupByIDController = new _DeleteGroupByIDController.DeleteGroupByIDController();
const getAllGroupController = new _GetAllGroupController.GetAllGroupController();
const groupRoutes = (0, _express.Router)();
exports.groupRoutes = groupRoutes;
groupRoutes.post("/", createGroupController.handle);
groupRoutes.delete("/:id", deleteGroupByIDController.handle);
groupRoutes.get("/Ppage=:pPage&pPer_page=:pPer_Page", getAllGroupController.handle);
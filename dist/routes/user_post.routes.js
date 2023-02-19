"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPostRoutes = void 0;
var _express = require("express");
var _CreateUserPostController = require("../modules/user_post/useCases/createUserPostGroup/CreateUserPostController");
var _DeleteUserPostByIDController = require("../modules/user_post/useCases/deleteUserPostById/DeleteUserPostByIDController");
var _GetAllUserPostController = require("../modules/user_post/useCases/getUserPostAll/GetAllUserPostController");
const createUserPostController = new _CreateUserPostController.CreateUserPostController();
const deleteUserPostByIDController = new _DeleteUserPostByIDController.DeleteUserPostByIDController();
const getAllUserPostController = new _GetAllUserPostController.GetAllUserPostController();
const UserPostRoutes = (0, _express.Router)();
exports.UserPostRoutes = UserPostRoutes;
UserPostRoutes.post("/", createUserPostController.handle);
UserPostRoutes.delete("/:id", deleteUserPostByIDController.handle);
UserPostRoutes.get("/Ppage=:pPage&pPer_page=:pPer_Page", getAllUserPostController.handle);
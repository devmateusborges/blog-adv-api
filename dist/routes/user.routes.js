"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;
var _express = require("express");
var _CreateUserController = require("../modules/users/useCases/createUser/CreateUserController");
var _GetUserByEmailController = require("../modules/users/useCases/getAllUserByEmail/GetUserByEmailController");
var _GetAllUsersController = require("../modules/users/useCases/getAllUsers/GetAllUsersController");
const createUserController = new _CreateUserController.CreateUserController();
const getAllUsersController = new _GetAllUsersController.GetAllUsersController();
const getUserByEmailController = new _GetUserByEmailController.GetUserByEmailController();
const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.get("/:email", getUserByEmailController.handle);
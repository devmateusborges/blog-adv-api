"use strict";
exports.__esModule = true;
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../modules/users/useCases/createUser/CreateUserController");
var GetAllUsersController_1 = require("../modules/users/useCases/getAllUsers/GetAllUsersController");
var createUserController = new CreateUserController_1.CreateUserController();
var getAllUsersController = new GetAllUsersController_1.GetAllUsersController();
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
//# sourceMappingURL=user.routes.js.map
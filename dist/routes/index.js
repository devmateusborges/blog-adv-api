"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _express = require("express");
var _group = require("./group.routes");
var _post = require("./post.routes");
var _post_group = require("./post_group.routes");
var _user = require("./user.routes");
var _user_post = require("./user_post.routes");
const routes = (0, _express.Router)();
exports.routes = routes;
routes.use("/users", _user.userRoutes);
routes.use("/posts", _post.postRoutes);
routes.use("/groups", _group.groupRoutes);
routes.use("/postgroups", _post_group.postGroupRoutes);
routes.use("/userpost", _user_post.UserPostRoutes);
import { Router } from "express";
import { groupRoutes } from "./group.routes";

import { postRoutes } from "./post.routes";
import { postGroupRoutes } from "./post_group.routes";

import { userRoutes } from "./user.routes";
import { UserPostRoutes } from "./user_post.routes";
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);
routes.use("/groups", groupRoutes);
routes.use("/postgroups", postGroupRoutes);
routes.use("/userpost", UserPostRoutes);

export { routes };

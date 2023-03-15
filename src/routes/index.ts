import { Router } from "express";
import { groupRoutes } from "./group.routes";

import { postRoutes } from "./post.routes";

import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);
routes.use("/groups", groupRoutes);

export { routes };

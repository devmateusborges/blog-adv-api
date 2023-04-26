import { Router } from "express";
import { userRoutes } from "./gpt.routes";

const routes = Router();

routes.use("/chat", userRoutes);

export { routes };

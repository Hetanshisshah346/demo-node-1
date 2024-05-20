import { Router } from "express";
import { AuthRoutes } from "./authRoutes";
import { main } from "ts-node/dist/bin";

const mainRouter : Router = Router();

const authRoutes : Router = new AuthRoutes().getRouter();
mainRouter.use("/auth", authRoutes);

export default mainRouter
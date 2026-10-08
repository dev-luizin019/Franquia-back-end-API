import express from "express";
import { healthRoutes } from "./modules/health/health.routes";

const routes = express.Router();

routes.use(healthRoutes)

export default routes;

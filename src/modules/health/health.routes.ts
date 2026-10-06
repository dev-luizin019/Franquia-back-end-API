import express, { type Request, type Response } from "express";

const healthRoutes = express.Router();
healthRoutes.get("/health", (req: Request, res: Response) => {
  res.status(200).json("Teste funcionando");
});

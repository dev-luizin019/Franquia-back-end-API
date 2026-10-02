import express, { type Request, type Response } from "express";

const routes = express.Router();

routes.get("/test", (req: Request, res: Response) => {
  res.status(200).json("Teste funcionando");
});


export default routes
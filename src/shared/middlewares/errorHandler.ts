import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";
import { logger } from "../utils/logger";

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 400,
      message: "Erro de validação",
      issues: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (error instanceof AppError && error.isOperational) {
    return res
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message });
  }

  logger.error(
    {
      err: error,
      path: req.path,
      method: req.method,
    },
    "Errro interno de servidor não tratado",
  );

  return res.status(500).json({
    status: 500,
    message:
      process.env.NODE_ENV === "production"
        ? `Erro inesperado de servidor`
        : `${error.message} - Erro de servidor`,
  });
}

export default errorHandler;

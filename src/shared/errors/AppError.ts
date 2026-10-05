export class AppError extends Error {
  isOperational: boolean;
  statusCode: number;

  constructor(statusCode = 500, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

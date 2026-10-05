import { AppError } from "./AppError";

 export class BadRequestError extends AppError {
  constructor(mesage = "Requisição inválida") {
    super(400, mesage);
  }
}

 export class NotFoundError extends AppError {
  constructor(mesage = "Recurso não encontrado") {
    super(404, mesage);
  }
}

 export class UnauthorizedError extends AppError {
  constructor(mesage = "Não autorizado") {
    super(401, mesage);
  }
}


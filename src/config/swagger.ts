import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";
import { z } from "zod";

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

registry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

//gera o docuimento OpenAPI a partir dos schema e rotas registradas
//deve ser chamada após todos os *.docs.ts serem importados
export function generateOpenAPIDocument() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "API de gestão de franquias",
      version: "1.0.0",
      description: "Documentação de API RESTful do sistema de franquias",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor de Desenvolvimento",
      },
    ],
  });
}

//Configura as rotas do Swagger UI no Exppress
//deve ser chamada após todos os *.docs.ts
export function setupSwagger(app: Express) {
  const swaggerSpec = generateOpenAPIDocument();

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/docs.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(swaggerSpec);
  });
}

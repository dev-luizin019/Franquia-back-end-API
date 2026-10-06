import z from "zod";

export const HealthSchema = z.object({
  port: z.string().openapi({ example: '3000' }),
  status: z.string().openapi({ example: 'online' }),
  link: z.string().openapi({ example: 'http://localhost:3000' }),
});
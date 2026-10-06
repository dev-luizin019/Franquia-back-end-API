// src/modules/user/user.docs.ts
import { registry } from '../../config/swagger';
import { HealthSchema } from './health.schema';

// Registra os schemas como componentes reutilizáveis
const HealthComponent = registry.register('User', HealthSchema);
// Registra cada rota com sua documentação
registry.registerPath({
  method: 'get',
  path: '/health',
  summary: 'Servidor Rodando',
  tags: ['healph'],
  responses: {
    200: {
      description: 'Servidor funcionando de forma estável!',
      content: {
        'application/json': { schema: HealthSchema.array() },
      },
    },
  },
});

// registry.registerPath({
//   method: 'post',
//   path: '/users',
//   summary: 'Cria um novo usuário',
//   tags: ['Users'],
//   request: {
//     body: {
//       content: {
//         'application/json': { schema: CreateUserSchema },
//       },
//     },
//   },
//   responses: {
//     201: {
//       description: 'Usuário criado',
//       content: {
//         'application/json': { schema: UserSchema },
//       },
//     },
//     400: { description: 'Dados inválidos' },
//   },
// });

// registry.registerPath({
//   method: 'get',
//   path: '/users/{id}',
//   summary: 'Busca usuário por ID',
//   tags: ['Users'],
//   request: {
//     params: z.object({
//       id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
//     }),
//   },
//   responses: {
//     200: {
//       description: 'Usuário encontrado',
//       content: {
//         'application/json': { schema: UserSchema },
//       },
//     },
//     404: { description: 'Usuário não encontrado' },
//   },
// });
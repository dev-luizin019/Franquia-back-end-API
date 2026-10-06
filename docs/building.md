# Passos de contrução da aplicação

1.0 Inicialização do repositório e versionamento
    ``instalação das primeira dependencias``

2.0 Infraestrutura local Docker
    ``garante que a pessoa que vai executar o projeto em outra máquian local não precise instalar PostgreSQL, NodeJs na máquina``

3.0 Configuração NodeJs e Typescript
    ``criação dos primeiros scripts e tipagens typescript.json``

4.0 Configuração Prisma ORM e conexão com banco
    ``configuração incial do prisma, primeiro model e prisma config``

5.0 Estrutura de base do servidor express
    ``criação do app, server(listen)``

    5.1 Middlewares de segurança halmet, cors, rate-limit global
    5.2 Pino (pino-pretty e pino destionation) para logs de aplicação exibidos no terminal e salvos em arquivo de logs
    5.3 Midlleware de erros global
    ``Middleware ErrorHandler e class AppError``


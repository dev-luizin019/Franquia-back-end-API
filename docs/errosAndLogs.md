# Tratamento de erros

1.0 Classe AppErrror de erros para chamar apenas passando (statusCode, message)
    ``exemplo AppError(404, não encontrado)``
2.0 Erros comuns que se repetem NotFoundError, UnauthorizedError, BadRequestError todas sendo classes filhas de AppError, não é preciso passar nenhum argumento
    ``exemplo NotFoundErrror()``
3.0 Middleware de erros globais, identifica se erro é um erro operacional, um erro de validação com Zod ou erro inesperado do servidor


# Logs com Pino e Pino-http

1.0     Middleware do pinoHttp({logger}) passada antes das requisições serem chamadas para registrar cada requisição que chega na aplicação 
2.0     Também passo no server ao chamar o listen() para registar que o servidor esta ativo
3.0     Middleware ErrorHandler para registar com logger() os erros inesperados de servidor

- Obs:(os logs gerados em uma API rodando em servidor, podem e devem ser salvas, coisas que por padão pino não faz sozinho. E elas podem ser salvas em servições de nuvem como Datadog, Grafana Loki, New Relic, Better Stack Logtail ou AWS CloudWatch) e também salvas em arquivos locais usando pino-roll, mas para isso é preciso configurar "logrotate" do Linux para que o arquivo não cresça indefinitivamente até lotar o disco;
- Em logger.ts com pino.multistream(configurado), os logs são salvos em um arquivo com destination e também exibidos de forma visualmente agradavel no terminal com o pretty
- Quando os logs são salvos em arquivos, com pino-roll é possivel configurar uma espécie de cache para os logs serem salvos onde os mais antigos são apagados com forme os novos vão chegando
- Os logs de aplicação que são os logs gerados pelo Pino não devem ser salvos diretamente no banco de dados, diferente dos logs de auditoria;



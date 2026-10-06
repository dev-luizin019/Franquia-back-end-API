# Sitema para gestão de Franquia

Sistema que centraliza o controle e gestão de toda uma franquia de lojoas (API-central)

## Funcionalidades
- Recurso 1: Login dos usuarios, com autenticação e validação por papel(role).

## Tecnologias Utilizadas

* **Linguagem:** Node.js (via Docker) com TypeScript
* **Arquitetura:** Monolítica Modular com Cmadas Internas
* **Modularização:** Por contexto de negócio
* **Camadas:** Por responsabilidades
* **Framework:** Express.js
* **Banco de Dados:** PostgreSQL (via Docker)
* **ORM:** Prisma
* **Validação:** Zod
* **Logs & Tratamento de Erros:** Pino e AppError customizado

## Pré-requisitos
* Docker e Docker Compose instalados

## Como Instalar e Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/dev-luizin019/Franquia-brack-end-.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4.1 Inicie o projeto(se tiver NodeJs e Postgres com o banco):
   ```bash
   npm run dev
   ```
ou
4.2 Docker compose: 
   4.2.1. Start everything in the background:
   ```bash
   docker compose up --build -d
   ```
   4.2.2. Watch the live output of your code:
   ```bash
   docker compose logs -f
   ```
   4.2.3. Turn off the servers when you are done working:
   ```bash
   docker compose down
   ```
    4.2.4. Aplicar migrations ():
   ```bash
   npx prisma migrate deploy
   ```
   ou apenas para aplicar apenas novas tabelas
   ```bash
   npx prisma migrate dev 
   ```

## Como Usar

Explique brevemente como interagir com o sistema:
- Acesse `http://localhost:3000` no navegador.
- Acesse `http://localhost:3000/login` para login.
- Utilize o login padrão: `[colocar_email]` / `[colocar_password]`.

## Como Contribuir

1. Faça um Fork do projeto.
2. Crie uma branch para sua Feature (`git checkout -b feature/NovaFeature`).
3. Faça o commit das alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o Push para a Branch (`git push origin feature/NovaFeature`).
5. Abra um Pull Request.

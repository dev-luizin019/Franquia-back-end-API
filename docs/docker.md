# Docs Docker utilizado no projeto  

version: '3.8'
    ``Versão``
services:
postgres_db:
    ````Será usado postgra como serviço```
image: postgres:15-alpine
    ```Define a imagem oficial do postgres, alpine é uma versão mais leve do Linux, que agilizada o dowload do container```
container_name: franquia_postgres
restart: always
    ````Garante que se o banco reiniciar ou docker, o banco sube automaticamente```
environment:
POSTGRES_USER: admin
POSTGRES_PASSWORD: adminpassword
POSTGRES_DB: franquia_db
    ````Define as credenciais de acesso```
ports:
- "5432:5432"
    ````Define que tanto na máquina fisica como no caoitainer a porta a ser utilizada```
volumes:
- postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
    ```Definir o volume para que quando o container para de rodar os dados não sejam perdios```

docker compose up -d
    ``para rodar os multiplos containers de acordo com arquivo .yml``

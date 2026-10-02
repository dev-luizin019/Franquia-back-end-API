# Docs docker-compose, e como é utilizado no projeto  

Versão
    ``version: '3.8'``

Confirações para a API NodeJS
    ``services:``

Indica que o dockerfile esta na mesma página
    ``api_app:``
    ``build: . ``

mapeia a porta 3000 da máquina para a 3000 do container
    ``ports:``
    ``- "3000:3000" ``

Sincroniza o código local com código do containere evita que a pasta local nodemodelues mude o container
    ``volumes:``
    ``- .:/app ``
    ``- /app/node_modules ``

Só inicia o app quando banco estiver pronto
    ``environment:``
    ``DATABASE_URL: "postgresql:/admin:password2114@postgres_db:5432/franquia_db?schema=public"``
    ``PORT: 3000``
    ``depends_on:``
    ``postgres_db:``
    ``condition: service_healthy`` 

Configurações para ocontainer do banco de dados
Será usado postgres como serviço
    ``postgres_db:``
Define a imagem oficial do postgres, alpine é uma versão mais leve do Linux, que agilizada o dowload do container
    ``image: postgres:15-alpine``


Garante que se o banco reiniciar ou docker, o banco sube automaticamente
    ``container_name: franquia_postgres``
    ``restart: always``


Define as credenciais de acesso
    ``environment:``
    ``POSTGRES_USER: admin``
    ``POSTGRES_PASSWORD: adminpassword``
    ``POSTGRES_DB: franquia_db``

Define que tanto na máquina fisica como no caoitainer a porta a ser utilizada
    ``ports:``
    ``- "5432:5432"``

Definir o volume para que quando o container para de rodar os dados não sejam perdios ao encerrar
    ``volumes:``
    ``- postgres_data:/var/lib/postgresql/data``
    ``volumes:``
    ``  postgres_data:``

para rodar os multiplos containers de acordo com arquivo .yml
    ``docker compose up -d``


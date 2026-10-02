#Usa uma imagem oficial 
FROM node:20-alpine

#Cria a pasta de trabalho dentro do container
WORKDIR /app

#copia os arquivos de dependencia primeiro
COPY package*.json ./

#instala todas as dependâncias
RUN npm install 

#copia os restante dos arquivos do projeto
COPY . . 

#gera o prisma cliente dentro do container
RUN npx prisma generate

#expõe a porta em que o Express vai rodar
EXPOSE 3000
#comando para rodar o app em mode de desenvolvimento
CMD ["npm", "run", "dev"]
# Define a imagem base como Node.js
FROM node:16.17.0

# Define o diretório de trabalho
WORKDIR /scr

# Copia o arquivo de dependências para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Compila a aplicação TypeScript
RUN npm install prisma

RUN prisma generate
# Expõe a porta que a aplicação irá usar
EXPOSE 3000

# Inicia a aplicação
CMD [ "npm", "start" ]

# Traemos la imagen base
FROM node:16

# Indicamos el directorio en el que trabajamos
WORKDIR /app

# Añadimos '/app/node_modules/.bin' al $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalamos las dependencias de la app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Añadimos la app
COPY . ./

# Iniciamos la app
CMD ["npm", "start"]
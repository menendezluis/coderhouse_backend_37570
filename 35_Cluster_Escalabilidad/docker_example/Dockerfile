#Primero definimos la imagen base
FROM node
#Definimos el directorio de trabajo
WORKDIR /app

#Copiamos el package.json
COPY package*.json ./

#Instalamos las dependencias
RUN npm install

#Copiamos el resto de los archivos
COPY . .

#Definimos el puerto
EXPOSE 3000

#Definimos el comando que se ejecutará al iniciar el contenedor
CMD [ "npm", "start" ]
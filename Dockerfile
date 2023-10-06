# especificar la version de node que vamos a usar
FROM node:18

# crear carpeta dentro del contenedor
WORKDIR /app

# copiar el archivo package.json en esa carpeta
COPY package.json .

# ejecutar el comando npm install para descargar las dependencias de node
RUN npm install

# copiar todos los archivos del proyecto en el contenedor
COPY . .

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
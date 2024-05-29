# Ejecutar en Dev

1. Clonar el repositorio
2. Instalar las dependencias `npm install`
3. Clone el archivo `.env.example` y renombrar a `.env`
4. Levantar la base de datos `docker-compose up -d`
5. Generar prisma client `npx prisma generate`
6. Levantar el servidor `npm run start:dev`
# PROYECTO-5-NO-SQL

API REST  para gestionar información  de películas de un cine. Quinta parte del proyecto de Master Prometeo.

## Descripción

El objetivo de este proyecto:

 - construir un servidor  y las rutas utilizando Express
 - definir un Schema y  modelo MOVIE con Mongoose 
 - crear una conexion a la base ded atos con Mongoose  
 - completar un CRUD completo 
 - crear una colección en base de datos que contenga la información de los cines que van a emitir las películas. 
 
 ## Requerimientos 

1.Crear un directorio de rutas y  un archivo con los Endpoints `GET`.

    1.1.Crear un endpoint get que devuelva todas las películas.
    1.2.Crear un endpoint get que devuelva una película según su _id
    1.3.Crear un endpoint get que devuelva un valor por su titulo.
    1.4.Crear un endpoint get que devuelva los documentos según su género.
    1.5.Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010.

2.Crear un método `POST` de Movies para crear una nueva película.

3.Crear un método `PUT` de Movies para modificar una película.

4.Crear un método `DELETE` de Movies para eliminar una película.

5.Controlar los errores.

6.Añadir al repositorio una imagen con las pruebas de Postman o Insomnia realizando las llamadas correctamente, incluidas las del arranque del proyecto.


## Estructura 

La estructura del proyecto es la siguiente:
```
│── index.js # Servidor principal con Express
│── package.json # Dependencias y scripts del proyecto
│── package-lock.json # Versión exacta de dependencias instaladas
│── .gitignore # Archivos y carpetas ignorados por Git
│
├── models/
│ └── Movie.js # Schema y modelo de Mongoose
│
├── routes/
│ ├── movie.routes.js # Rutas para la entidad Movie
│ └── routes_README.md # Documentación de las rutas
│
├── seeds/
│ └── movies.seed.js # Script para poblar la base de datos
│
├── utils/
│ └── db.js # Conexión a la base de datos con Mongoose
│
├── request_screenshots/
│ ├── GET/ # Capturas de solicitudes GET
│ ├── POST/ # Capturas de solicitudes POST
│ ├── PUT/ # Capturas de solicitudes PUT
│ └── DELETE/ # Capturas de solicitudes DELETE
```

## Requisitos 
- Node.js 
- Express JS
- Mongoose
- Nodemon 

## Autor

Álvaro Lassaletta - Agosto / Septiembre 2025.

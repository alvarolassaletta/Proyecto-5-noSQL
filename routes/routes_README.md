# API DE MOVIES  - ENDPOINTS

Este documento contiene una descripción de los endpoints contenidos en movie.routes.js

## GET 

Endpoints de las peticiones HTTP con el metodo GET:

### `/movies`

Devuelve todas las películas.

### `/movies/id/:id` 

Devuelve una película  concreta por su id.

Ejemplo: `http://localhost:3000/movies/68badaa16e33127cf49cd419`

### `/movies/title/:title`

Devuelve las películas que tengan el título buscado.

Ejemplo: `http://localhost:3000/movies/title/Buscando%20a%20Nemo`

### `/movies/genre/:genre` 

Devuelve las películas de un género determinado.

Ejemplo: `http://localhost:3000/movies/genre/Acci%C3%B3n`

### `/movies/year/:year`

Devuelve las peliculas  por año.

Ejemplo: `http://localhost:3000/movies/year/2010`

⚠️ **Nota**: Los endpoints con métodos **POST**, **PUT** y **DELETE** no se pueden probar directamente en el navegador.  
Se deben usar herramientas como **Postman**, **Insomnia** o comandos `curl` desde la terminal.

## POST 

Endpoint de las peticiones HTTP con el metodo POST:

### `/movies/create`

Crea una nueva película

Ejemplo: `http://localhost:3000/movies/create`

**Body (JSON):**
```json
{
  "title": "El Padrino",
  "director": "Francis Ford Coppola",
  "year": 1972,
  "genre": "Crimen/Drama"
}
```

## PUT 

Endpoint de las peticiones HTTP con el metodo PUT:

### `/movies/edit/:id`

Modifica los datos de una película por su id.

Ejemplo: `http://localhost:3000/movies/edit/68bd5d1fe9bf7cf8fbb43194`

**Body (JSON):**
```json
{
  "title": "El Padrino (Edición extendida)",
  "director": "Francis Ford Coppola",
  "year": 1972,
  "genre": "Drama"
}
````

### DELETE 

Endpoint de las peticiones HTTP con el metodo 
DELETE:

### `/movies/delete/:id`

Elimina una película por su id.

Ejemplo: `http://localhost:3000/movies/delete/68bd5d1fe9bf7cf8fbb43194`

### `/movies/delete/title/:title`

Elimina   todas las peliculas que tengan el título específicado.

Ejemplo: `http://localhost:3000/movies/delete/title/Interestelar`






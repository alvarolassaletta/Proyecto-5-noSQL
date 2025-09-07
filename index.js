const express =require('express');

const Movie = require('./models/Movie.js');
//importar el modelo en el index no es necesario ya porque no voy a hacer uso de los metodos del modelo en este archivo 

const movieRoutes = require('./routes/movie.routes')

const {connect}=require('./utils/db');

connect();


const PORT = 3000;
const server = express();


server.use(express.urlencoded({ extended: false }));

server.use(express.json());

server.use('/movies',movieRoutes);
//las rutas que comienzen por '/movies manejalas con el router de movieRoutes

// manejador de rutas no especificadas en el archivo de endpoints 
server.use((req,res,next)=>{
    const error = new Error('Route not found')
    error.status= 404
    next(error)
})
/*manejador global de errores*/ 
server.use((error,req,res,next)=>{
    return res.status(error.status ||500).json(error.message ||'Unexpected Error')
})

server.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})
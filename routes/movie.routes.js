/* 1.
    1.1.Crear un endpoint get que devuelva todas las películas.
    1.2.Crear un endpoint get que devuelva una película según su _id
    1.3.Crear un endpoint get que devuelva un valor por su titulo.
    1.4.Crear un endpoint get que devuelva los documentos según su género.
    1.5. Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010. 
*/
/**
    2.	Crear un método post de Movies para crear una nueva película.
    3.	Crear un método put de Movies para modificar una película.
    4.	Crear un método delete de Movies para eliminar una película.
 */
const express = require('express');

const Movie = require('../models/Movie.js');

const router= express.Router()


//1.1 Crear un endpoint get que devuelva todas las películas.
//ejemplo de peticion Get 'http://localhost:3000/movies'
router.get('/', async(req,res,next)=>{
    try{
        const  movies= await Movie.find()
        //find busca todos los documentos asociados al modelo y devuelve una promesa  que cuando se resuelve devuelve un array de documentos. Si no encuentra nada el array estara vacio
        return res.status(200).json(movies)
    }catch(error){
        next(error)
    }
})

//1.2. Crear un endpoint get que devuelva una película según su _id
//http://localhost:3000/movies/68badaa16e33127cf49cd419

router.get('/id/:id',async(req,res,next)=>{
    try{
        const searchedId = req.params.id
        //const {id} = req.params

        const searchedMovie = await Movie.findById(searchedId)
        //findById si encuentra el documento,  lo devuelve. Si no devuelve null

        if(searchedMovie){
            res.status(200).json(searchedMovie)
        }else{
            res.status(404).json({message:`No movie found with  id: ${searchedId}`})
        }
    }catch(error){
        next(error)
    }
})


//1.3.Crear un endpoint get que devuelva un valor por su titulo.
//http://localhost:3000/movies/title/Buscando%20a%20Nemo
router.get('/title/:title', async (req,res,next)=>{
    try{
        
        const movieTitle= req.params.title
        const movieByTitle= await Movie.find({title:movieTitle})

        /**Usando destructugin se puede hacer asi tb 
         * const {title} = req.params
         * const  movieByTitle= await Movie.Find({title})
         */

        if(movieByTitle.length){
            res.status(200).json(movieByTitle)
        }else{
            res.status(404).json({message:`Movie ${movieTitle} not found`})
        }

    }catch(error){
        next(error)
    }
})

//1.4.Crear un endpoint get que devuelva los documentos según su género.
//http://localhost:3000/movies/genre/Acci%C3%B3n
router.get('/genre/:genre',async(req,res,next)=>{

    try{
        // con destructuring 
        const {genre} =req.params
        const moviesByGenre= await Movie.find({genre:genre})

        if(moviesByGenre.length){
            res.status(200).json(moviesByGenre)
        }else{
            res.status(404).json({message:`No movies found for genre ${genre}`})
        }

    }catch(error){
        next(error)
    }
})



//1.5. Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010. 
//http://localhost:3000/movies/year/2010
router.get('/year/:year', async(req,res,next)=>{
    
   try{
        const {year} = req.params
        const  moviesAfterYear= await Movie.find({year:{$gt:year}})
        

        if(moviesAfterYear.length){
            res.status(200).json(moviesAfterYear)
        } else{
            res.status(404).json({message:`No movies found after ${year}`})
        }
        
   }catch(error){
        next(error)
   }
})

//2.	Crear un método post de Movies para crear una nueva película.

router.post('/create',async(req,res,next)=>{
    try{
        const {title,director,year,genre} = req.body

        const newMovie =  new Movie({
            title,
            director,
            year,
            genre,
        })

        const newMovieDocument =  await newMovie.save()  
        //save es un método de las instancia del Modelo, un metodo de los documentos.Guarda el documento en la base de datos y devuelve uan promesa  devuelve el documento

        res.status(201).json(newMovieDocument)
    }catch(error){
        next(error)
    }
})

//3.	Crear un método put de Movies para modificar una película.
//3.1 cambiamos el genero  la pelicula el padrino. De "Crimen/Drama" pasa a "Drama"


router.put('/edit/:id',async(req,res,next)=>{
    try{
        const {id} = req.params
        const {title,director,year,genre}=req.body
    
        const updatedMovie = await Movie.findByIdAndUpdate(id,{title,director,year,genre},{new:true})

        res.status(200).json(updatedMovie)

    }catch(error){
        next(error)
    }
})


//4.	Crear un método delete de Movies para eliminar una película.
//eliminar por ID 
router.delete('/delete/:id',async(req,res,next)=>{

    try{
        const {id} =req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id)
        
        if(deletedMovie){
            res.status(200).json({message:`Movie ${deletedMovie.title}  deleted succesfully`})
        } else{
            res.status(404).json({message:`Movie not found`})
        }
       
    }catch(error){
        next(error)
    }
})

//eliminar por título 
router.delete('/delete/title/:title',async(req,res,next)=>{
    try{ 
        const {title} = req.params
        const searchedMovies= await Movie.find({title:title})
        if(searchedMovies.length){
            await Movie.deleteMany({title:title})
            res.status(200).json({message:` Movie/s ${title} deleted`})

        }else{
            res.status(404).json({message:`No movies found with that title`})
        }
        
    }catch(error){
        next(error)
    }
})

module.exports = router
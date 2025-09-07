 const  mongoose = require('mongoose')
 const Movie = require('../models/Movie.js')

 const {connect} = require('../utils/db.js')

 const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

/*Ahora  creamos instancias del modelo Movie recorriendo el array Movies con map. Cada elemento del nuevo array sera un documento*/ 

const movieDocuments = movies.map(movie =>{
    return new Movie(movie)
})

const seedMovies = async () =>{
    try{
      await connect()

      try{
          const allMovies= await Movie.find()

         if(allMovies.length){
          await Movie.collection.drop()
          console.log('Collection dropped successfully')
        }
      }catch(error){
        console.log(`Error dropping collection ${error}`)
      }
     

      try{
        const insertedMovies=  await Movie.insertMany(movieDocuments)
        console.log('Documents inserted  successfully')
     
      }catch(error){
        console.log(`Error inserting documents  ${error}`)
      }
      
    }catch(error){
        console.log(`Error seeding database ${error}`)
    } finally{
         await mongoose.disconnect()
    }

}
seedMovies()
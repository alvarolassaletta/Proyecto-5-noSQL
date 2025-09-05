const mongoose = require('mongoose')

const Schema = mongoose.Schema
//clase Schema 

const movieSchema = new Schema(
    //instancia la clase Schema con un Schema concreto
    {
        title:{type:String,required:true},
        director:{type:String,required:true},
        year:{type:Number},
        genre:{type:String,required:true}
    },
    {
        timestamps:true
    }
 )

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie
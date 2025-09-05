const  mongoose = require ('mongoose');

const urlDb= 'mongodb://localhost:27017/proyecto-movies';

const connect = async() =>{

    try{
         await mongoose.connect(urlDb)

    }catch(error){
        console.log(`Error when connecting with database: ${error}`)
    }
}

module.exports= {connect}
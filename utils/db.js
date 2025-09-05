const  mongoose = require ('mongoose');

const urlDb= 'mongodo://localhost27017/proyecto-movies';

const connect = async() =>{

    try{
         await mongoose.connect(urlDb)

    }catch(error){
        console.log(`Error when connection with database: ${error}`)
    }
}

module.exports= {connect}
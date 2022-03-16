const mongoose =require('mongoose')

const infoschema=new mongoose.Schema({
    org:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    info:{
        type:String,
    },
    contact:{
        type:String
    }
})

const information=mongoose.model('information',infoschema)
module.exports={
    information
}
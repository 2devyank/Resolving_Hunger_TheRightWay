const mongoose =require('mongoose')

const infoschema=new mongoose.Schema({
    heading:{
        type:String,
        // required:true
    },
    message:{
        type:String,
        // required:true
    }
})

const information=mongoose.model('information',infoschema)
module.exports={
    information
}
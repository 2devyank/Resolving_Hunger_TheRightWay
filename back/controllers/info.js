const {information}=require('../models/info')

const getinfo=async(req,res)=>{

    try{
const data= await information.find({})
res.status(200).json({data})
    }catch(error){
console.log(error)
    }
}
const createinfo=async(req,res)=>{

    try{
const data=await information.create(req.body)
res.status(201).json({data})
    }catch(error){
console.log(error)
    }
}
const deleteinfo=async(req,res)=>{

    try{
        const {id:infoID}=req.params
const data=await information.findByIdAndDelete({_id:infoID})
res.status(201).json('info deleted succesfully ')
    }catch(error){
console.log(error)
    }
}
module.exports={
    getinfo,createinfo,deleteinfo
}
const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
require('dotenv').config()

const inforoute=require('./routes/inforoute')
const app=express()

app.use(bodyparser.json({limit:'30mb',extended:true}))
app.use(bodyparser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

app.use('/api/v1',inforoute)
app.get('/',(req,res)=>{
    res.send("hello")
})

const port=process.env.PORT||5000

mongoose.connect(process.env.connect_url,{useNewUrlParser:true,useUnifiedTOpology:true})
.then(()=>{
    app.listen(port,console.log('listening on port 5000'))
})
.catch((error)=>console.log(error))
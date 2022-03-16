const { application } = require('express')
const express=require('express')

const router=express.Router()

const {getinfo,createinfo, deleteinfo}=require('../controllers/info')

router.get('/',getinfo)
router.post('/',createinfo)
router.delete('/:id',deleteinfo)

module.exports=router
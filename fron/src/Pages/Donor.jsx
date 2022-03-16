import { Component, useState } from 'react'
import React from 'react'
// import logo from './logo.svg'
// // import './App.css'
import * as api from '../api'
import { Post } from '../component/Post'
import Form from '../component/Form'
import { Container } from 'react-bootstrap'

    const data = await api.getinfo()
 console.log(data.data.data)
  
function Donor() {
 
  
    const [material, setmaterial] = useState({org:'',address:'',info:'',contact:''})

    const handlesubmit=(e)=>{
      e.preventDefault()
    
     api.createinfo(material)
    
    }
  
  return (
<Container>

    <div>
      
      <Form material={material} handlesubmit={handlesubmit} setmaterial={setmaterial}/>
      {data.data.data.map((da) => (
        <Post da={da} material={material} setmaterial={setmaterial} key={da._id}/>
      )

      )}
    </div>
    </Container>
  )
      }


export default Donor

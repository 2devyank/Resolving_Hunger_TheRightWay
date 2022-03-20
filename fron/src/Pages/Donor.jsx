import { Component, useState } from 'react'
import React from 'react'
// import logo from './logo.svg'
// // import './App.css'
import * as api from '../api'
import { Post } from '../component/Post'
import Forms from '../component/Forms'
import { Container } from 'react-bootstrap'
import '../Styles/donor.css'


    const data = await api.getinfo()
 console.log(data.data.data)
  
function Donor() {
 
  
    const [material, setmaterial] = useState({org:'',address:'',info:'',contact:''})

    const handlesubmit=(e)=>{
      e.preventDefault()
    
     api.createinfo(material)
    
    }
  
  return (
<Container fluid className='don'>

    <div>
      <br />
      <div className='for'  >

      <Forms material={material} handlesubmit={handlesubmit} setmaterial={setmaterial}/>
      </div>
      <br />
      <div className='post'>

      {data.data.data.map((da) => (
        <Post da={da} material={material} setmaterial={setmaterial} key={da._id}/>
        )
        
        )}
        </div>
        <br />
    </div>
    </Container>
  )
      }


export default Donor

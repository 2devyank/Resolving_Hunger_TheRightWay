import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import * as api from '../api'
import '../Styles/card.css'
export const Post=({da,material,setmaterial})=>{
    const [key, setkey] = useState('')
    const del=(id)=>{
      // e.preventDefault();
        api.deleteinfo(id)
          }
          const up=(id,post)=>{
api.updateinfo(id,post)
          }
         
        
          
    return(
      <Card className='card' >

        <Card.Header>Organization Name</Card.Header>
        
        <Card.Body>{da.org}</Card.Body>
        <Card.Header>Information</Card.Header>
        <Card.Body>{da.info}</Card.Body>
        <Card.Header>Address & Contact details</Card.Header>
        <Card.Footer>{da.address}{da.contact}</Card.Footer>
        <Button onClick={()=>del(da._id)}>Delete</Button>
     <Button onClick={()=>setmaterial({org:da.org,address:da.address,info:da.info,contact:da.contact})}>Edit</Button>
     <Button onClick={(e)=>up(da._id,material)}>Update</Button>
      </Card>
  
    )
}
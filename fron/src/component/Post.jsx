import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import * as api from '../api'
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
      <Card style={{width:"30%"}}>
        <Card.Header>{da.org}</Card.Header>
        <Card.Body>{da.info}</Card.Body>
        <Card.Footer>{da.address}{da.contact}</Card.Footer>
        <Button onClick={()=>del(da._id)}>Delete</Button>
     <Button onClick={()=>setmaterial({org:da.org,address:da.address,info:da.info,contact:da.contact})}>Edit</Button>
     <Button onClick={(e)=>up(da._id,material)}>Update</Button>
      </Card>
  //   <div>
  //   <h1>{da.org} </h1>
  //   <p>{da.address}</p>
  //   <p>{da.info}</p>
  //   <p>{da.contact}</p>
  //   {/* <p>{da._id}</p> */}
  //   <button onClick={()=>del(da._id)}>Delete</button>
  //   <button onClick={()=>setmaterial({org:da.org,address:da.address,info:da.info,contact:da.contact})}>Edit</button>
  //   <button onClick={(e)=>up(da._id,material)}>Update</button>
  // </div>
    )
}
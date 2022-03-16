import { useState } from 'react'
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
    <div>
    <h1>{da.heading} </h1>
    <p>{da.message}</p>
    {/* <p>{da._id}</p> */}
    <button onClick={()=>del(da._id)}>Delete</button>
    <button onClick={()=>setmaterial({heading:da.heading})}>Edit</button>
    <button onClick={(e)=>up(da._id,material)}>Update</button>
  </div>
    )
}
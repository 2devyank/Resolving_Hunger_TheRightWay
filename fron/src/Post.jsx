import * as api from './api'
export const Post=({da,material,setmaterial})=>{
    
    const del=(id)=>{
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
    <button onClick={()=>up(da._id,material)}>Update</button>
  </div>
    )
}
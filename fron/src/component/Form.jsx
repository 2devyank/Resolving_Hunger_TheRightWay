import React from 'react'

export default function Form({handlesubmit,material,setmaterial}) {
  return (
    <form onSubmit={handlesubmit} >
    <label >Heading</label>
    <input type="text" value={material.heading} onChange={(e)=>setmaterial({heading:e.target.value})} />
    <label >Message</label>
    <input type="text" onChange={(e)=>setmaterial(...material,message=e.target.value)} />
  <button type='submit'>Submit</button>
 
  </form>
  )
}

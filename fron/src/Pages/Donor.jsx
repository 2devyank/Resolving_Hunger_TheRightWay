import { Component, useState } from 'react'
import React from 'react'
// import logo from './logo.svg'
// // import './App.css'
import * as api from '../api'
import { Post } from '../component/Post'
import Form from '../component/Form'
// import { Post } from '../component/Post'
// const start = async () => {
  // try {
    const data = await api.getinfo()
 console.log(data.data.data)
  // } catch (error) {
    // console.log(error)
  // }
// }
// const start=async (post)=>{
//   await api.createinfo(post)
// }
function Donor() {
 
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: 'hello'
  //   };
  // }
    const [material, setmaterial] = useState({heading:''})

    const handlesubmit=(e)=>{
      e.preventDefault()
    
     api.createinfo(material)
    
    }
    const clear=()=>{
      setmaterial({heading:''})
    }
  return (

    <div>
      {/* <form onSubmit={handlesubmit} >
        <label >Heading</label>
        <input type="text" value={material.heading} onChange={(e)=>setmaterial({heading:e.target.value})} />
        <label >Message</label>
        <input type="text" onChange={(e)=>setmaterial(...material,message=e.target.value)} />
      <button type='submit'>Submit</button>
     

      </form> */}
      <Form material={material} handlesubmit={handlesubmit} setmaterial={setmaterial}/>
      {data.data.data.map((da) => (
        <Post da={da} material={material} setmaterial={setmaterial} key={da._id}/>
      )

      )}
    </div>
  )
      }


export default Donor

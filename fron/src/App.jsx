import { useState } from 'react'
// import logo from './logo.svg'
// // import './App.css'
import * as api from './api'
import { Post } from './Post'
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

function App() {
  const [material, setmaterial] = useState({heading:''})

  const handlesubmit=(e)=>{
    e.preventDefault()
  
   api.createinfo(material)
  
  }
  
  return (

    <div>
      <form onSubmit={handlesubmit} >
        <label >Heading</label>
        <input type="text" onChange={(e)=>setmaterial({heading:e.target.value})} />
        {/* <label >Message</label>
        <input type="text" onChange={(e)=>setmaterial(...material,message=e.target.value)} /> */}
      <button type='submit'>Submit</button>
      </form>
      {data.data.data.map((da) => (
        <Post da={da} material={material} setmaterial={setmaterial}/>
      )

      )}
    </div>
  )
}

export default App

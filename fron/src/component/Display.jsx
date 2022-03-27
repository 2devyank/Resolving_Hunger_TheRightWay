import React from 'react'
import '../Styles/display.css'
function Display({da}) {
    console.log(da);
  return (
    <div className='set'> 
    <h2>{da.name}</h2>
    <p>{da.mission}</p>
    <p>
        Location:{da.location}
        </p>
        <p>Contact Details:{da.contact}</p>
        </div>
    // <div>hello</div>
  )
}
export default Display;


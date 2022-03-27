import React, { Component } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Display from '../component/Display';
// import Display from '../component/Display';
// import { Display } from '../component/Display'
import odata from '../data/data.json'
import '../Styles/n.css'

// // import React from 'react'

 function NGOs() {
    const [dat,setdat]=useState(odata);
    const [search,setsearch]=useState('');

   const  handlesearch=()=>{
        return (
            dat.filter((d)=>
                d.location.toLowerCase().includes(search)
            )
        )
    }

    console.log(dat);
   return (
    <Container fluid className='dis' >
         <div className='pad'>
         <div>
             <h1>Search Ngo Near To You !</h1>

<input type="text" onChange={(e)=>setsearch(e.target.value)}  />
<br />
<br />
{handlesearch().map((da)=>{ 
    return <Display da={da} /> 
          
              })}
            
            </div>
            </div>
        </Container>
  )
 }
export default NGOs;
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
    console.log(dat);
   return (
    <Container fluid className='dis'>

         <div>
{dat.map((da)=>{ 
    return <Display da={da} /> 
          
              })}
            
            </div>
        </Container>
  )
 }
export default NGOs;
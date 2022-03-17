import React from 'react'
import { Container } from 'react-bootstrap'
// import Player from '../component/Player'
import v from '../component/v3.mp4'
export default function Home() {
  return (
   <Container>

<video loop autoPlay style={{width:'100%',height:'90vh'}}>
        <source
          src={v}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    
   </Container> 
  )
}

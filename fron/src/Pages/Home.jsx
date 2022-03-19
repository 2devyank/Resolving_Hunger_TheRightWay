import React from 'react'
import { Button, Container } from 'react-bootstrap'
// import Player from '../component/Player'
import v from '../component/v3.mp4'
import svg from '../component/teamwork.mp4'
import '../Styles/home.css'
export default function Home() {
  return (
   <Container fluid className='f'>
<br />
<video loop autoPlay style={{width:'100%',height:'82vh'}}>
        <source
          src={v}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
<div className='fir'>
  <div className='first'>
    <div className='l'><h2>Our Aim</h2>
    <p>To Bring Non Goverment Organization's and Wedding Organizers , Grocer , Restaurants
       Owner Under One Roof</p>
    </div>
    <div className='r'>
      <video loop autoPlay >
        <source
          src={svg}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
  </div>
</div>
    <div className='last'>
      <div className='end'>
       <h2>Make Food Reach The Right Place</h2><a href="/donor">
         <Button >Give Now</Button>
         </a>
      
       
       


      </div>
    </div>
    <br />

   </Container> 
  )
}

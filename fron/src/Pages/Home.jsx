import React from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'
// import Player from '../component/Player'
import v from '../component/v3.mp4'
import svg from '../component/teamwork.mp4'
import food from '../component/food.png'
import chef from '../component/chef-platter.png'
import trash from '../component/trash.png'
import '../Styles/home.css'
import pic from '../component/pic.png'
import pic1 from '../component/pic1.jpg'
import pic2 from '../component/pic2.jpg'
import pic3 from '../component/pic3.jpg'
import p from '../component/p.png'
export default function Home() {
  return (
   <Container fluid className='f'>
     <br />
{/* <br /> */}
{/* <video loop autoPlay style={{width:'100%',height:'82vh'}}>
        <source
          src={v}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div className='b'>
      <Carousel  className='slider'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="First slide"
      // width='50%'
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5> */}
      {/* <p>Food Needs To reach the right place.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={p}
// src='https://miro.medium.com/max/1400/1*qf7mvPmIwNRznFDWOkdscw.png'
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
      {/* <img src={pic} alt="" style={{width:'100%',height:'82vh'}}/> */}
      </div>
      <br />
<div className='fir'>
  <div className='first'>
    <div className='l'><h2>Our Aim</h2>
    <p>To Bring Non Goverment Organization's and Wedding Organizers , Grocer , Restaurants
       Owner Under One Roof</p>
    </div>
    {/* <div className='r'>
      <video loop autoPlay >
        <source
          src={svg}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div> */}
  </div>
</div>
<div className='sec'>
    <h1>Facts</h1>
  <div className='facts'>
<div className='graph'><img src={food} alt="" />
<p>According to several types of research,
 approximately 40 percent of the 
food prepared at a wedding venue is wasted
 and thrown away 
after the wedding ends</p>
</div>
<div className='graph'> <img src={chef} alt="" />

<p>For every meal eaten in a restaurant, 
nearly 500 grams of food is wasted — through preparation, spoilage and leftovers on diners' plates.</p></div>
<div className='graph'><img src={trash} alt="" />
<p>Around half a billion pounds' worth of edible food is thrown each year due to the sell by date set by the owner in reality no one knows if food is edible</p></div>
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

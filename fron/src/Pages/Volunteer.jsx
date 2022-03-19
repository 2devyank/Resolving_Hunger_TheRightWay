import React from 'react'
import {Container, Form,Button} from 'react-bootstrap'
import '../Styles/volun.css'
export default function Volunteer() {
  return (
    <Container fluid className='v'>
<br />
      <div className='vol' >
        <h1>Volunteer With Us</h1>
        <p>Though our motive through 
           this program is different we have a different way of approach for ending Hunger.
           but small acts when multiplied by millions of people, can transform the world .
          We Hereby request People to come and join us and 
          provide help in whatever possible way they can . 
        </p>
      </div>
      <div className='first'>
        <div className='form'>
          <div className='g'><Form><Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control style={{background:'transparent' ,color:'white',borderRadius:'2rem'}} type="email"  />
    
  </Form.Group>

  <Form.Group className="mb-2" >
    <Form.Label>Name</Form.Label>
    <Form.Control style={{background:'transparent',borderRadius:'2rem'}} type="text" />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Phone No</Form.Label>
    <Form.Control style={{background:'transparent',borderRadius:'2rem'}} type="text"  />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} style={{background:'transparent',borderRadius:'2rem'}} type="text"  />
  </Form.Group>
  
  <Button variant="secondary" type="submit">
    Submit
  </Button></Form></div>
          <div className='u'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrSu673Mf-aoF07CUjeMbS4bMUaFWlSjDOg&usqp=CAU" alt="" /></div>
        </div>
      </div>

        </Container>
  )
}

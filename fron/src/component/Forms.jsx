import React, { useState } from 'react'

import {Button,Form, Modal, ModalBody} from 'react-bootstrap'
import '../Styles/form.css'

export default function Forms({handlesubmit,material,setmaterial}) {
  
  return (
//     <form onSubmit={handlesubmit} >
//     <label >Heading</label>
//     <input type="text" value={material.heading} onChange={(e)=>setmaterial({heading:e.target.value})} />
//     <label >Message</label>
//     <input type="text" onChange={(e)=>setmaterial(...material,message=e.target.value)} />
//   <button type='submit'>Submit</button>
 
//   </form>
<>

  

  {/* <Form onSubmit={handlesubmit} >
    <label >Organization</label><br />
    <input type="text" value={material.org} onChange={(e)=>setmaterial({...material,org:e.target.value})} />
  <br />
    <label >Addres</label><br />
    <input type="text" value={material.address} onChange={(e)=>setmaterial({...material,address:e.target.value})}  />
<br />
<label >Information</label><br />
<textarea name="info" value={material.info} cols="30" rows="5" onChange={(e)=>setmaterial({...material,info:e.target.value})} ></textarea>
   
<br />
<label >Contact</label><br />
    <input type="text" value={material.contact} onChange={(e)=>setmaterial({...material,contact:e.target.value})}  />
<br />
  <Button type='submit'>Submit</Button>
 
  </Form> */}
  <Form onSubmit={handlesubmit} className='fo'><Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Organization</Form.Label>
    <Form.Control value={material.org} onChange={(e)=>setmaterial({...material,org:e.target.value})}  style={{background:'transparent' ,borderRadius:'2rem'}}  />
    
  </Form.Group>

  <Form.Group className="mb-2" >
    <Form.Label>Addres</Form.Label>
    <Form.Control  value={material.address} onChange={(e)=>setmaterial({...material,address:e.target.value})}  style={{background:'transparent',borderRadius:'2rem'}} type="text" />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Contact</Form.Label>
    <Form.Control value={material.contact} onChange={(e)=>setmaterial({...material,contact:e.target.value})}  style={{background:'transparent',borderRadius:'2rem'}} type="text"  />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Please Enter The Details about Food which you would like to Donate !</Form.Label>
    <Form.Control  value={material.info}  onChange={(e)=>setmaterial({...material,info:e.target.value})}  as="textarea" rows={3} style={{background:'transparent',borderRadius:'2rem'}} type="text"  />
  </Form.Group>
  
  <Button variant="secondary" type="submit">
    Submit
  </Button></Form>
 

</>
  )
}

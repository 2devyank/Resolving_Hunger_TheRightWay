import React, { useState } from 'react'

import {Button, Modal, ModalBody} from 'react-bootstrap'

export default function Form({handlesubmit,material,setmaterial}) {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
//     <form onSubmit={handlesubmit} >
//     <label >Heading</label>
//     <input type="text" value={material.heading} onChange={(e)=>setmaterial({heading:e.target.value})} />
//     <label >Message</label>
//     <input type="text" onChange={(e)=>setmaterial(...material,message=e.target.value)} />
//   <button type='submit'>Submit</button>
 
//   </form>
<>
<Button variant="primary" onClick={handleShow}>
  Launch demo modal
</Button>

<Modal show={show} onHide={handleClose} centered>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>

  <form onSubmit={handlesubmit} >
    <label >Organization</label><br />
    <input type="text" value={material.org} onChange={(e)=>setmaterial({...material,org:e.target.value})} />
  <br />
    <label >Addres</label><br />
    <input type="text" value={material.address} onChange={(e)=>setmaterial({...material,address:e.target.value})}  />
<br />
<label >Information</label><br />
<textarea name="info" value={material.info} cols="30" rows="5" onChange={(e)=>setmaterial({...material,info:e.target.value})} ></textarea>
    {/* <input type="text"  onChange={(e)=>setmaterial({...material,info:e.target.value})}  /> */}
<br />
<label >Contact</label><br />
    <input type="text" value={material.contact} onChange={(e)=>setmaterial({...material,contact:e.target.value})}  />
<br />
  <Button type='submit'>Submit</Button>
 
  </form>
  </Modal.Body>
 
</Modal>
</>
  )
}

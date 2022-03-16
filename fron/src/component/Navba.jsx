
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navba() {
  return (
    <Navbar style={{ background: "lightblue" }} expand="lg" >
    <Container fluid>
      <Navbar.Brand style={{ flex: "0.7" }} href="/">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cTALizuqA1klfzMF7BS9NIh4X59QaWiFIg&usqp=CAU"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      RHRW
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px', flex: "0.5", display: "flex", justifyContent: 'space-between' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/club"></Nav.Link> */}
          <Nav.Link href="/donor">Give Now</Nav.Link>
          <Nav.Link href="/volun">Volunteer</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

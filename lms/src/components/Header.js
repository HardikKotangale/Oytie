import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './style.css'

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className='Header' variant="dark" >
      <Container>
        <Navbar.Brand href="#logo" className='zoom Logo'> <img src={props.logo} width="232" height="72" alt='none'  className="d-inline-block align-top"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse bg="light" sid="responsive-navbar-nav" >
          <Nav className="me-auto fs-4.5 " >
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#home">{props.home}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#lmsPortal">{props.navLink1}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#jobPortal">{props.navLink2}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  className="zoom hover-underline-animation me-auto  fs-4.5 text-light" href="#contactUs">{props.contactUs} </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
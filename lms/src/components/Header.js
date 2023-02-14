import {Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import React from 'react';
import './style.css'

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className='Header' variant="dark" >
      <Container>
        <Navbar.Brand href="#logo" className='Logo'> <img src={props.logo} width="232" height="72" alt='none'  className="d-inline-block align-top"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse bg="light" sid="responsive-navbar-nav" >
          <Nav className="me-auto fs-4.5" >
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#home">{props.home}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#aboutUs">{props.navLink1}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#lmsPortal">{props.navLink2}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#jobPortal">{props.navLink3}</Nav.Link>
            <NavDropdown  title={props.navLink4}  id="navbarScrollingDropdown " >
              <NavDropdown.Item className=" text-dark" href="#services/manfacurting">{props.dropDownlink1}</NavDropdown.Item>
              <NavDropdown.Item className=" text-dark" href="#services/designAndDevelopment">{props.dropDownlink2}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className=" text-dark" href="#services/lmsPortal">{props.dropDownlink3}</NavDropdown.Item>
              <NavDropdown.Item className=" text-dark" href="#services/jobPortal">{props.dropDownlink4}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="zoom hover-underline-animation me-auto text-light" href="#cilent">{props.navLink5}</Nav.Link>
            <Nav.Link className="zoom hover-underline-animation me-auto  fs-4.5 text-light" href="#contactUs">{props.contactUs} </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
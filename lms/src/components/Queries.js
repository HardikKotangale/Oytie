import {Col,FloatingLabel,Form,Row,Button,InputGroup  } from 'react-bootstrap';
import React, { useState } from 'react';
import './style.css'

function Queries() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

    setValidated(true);
    };

    return (
      <>
      <div className='Queries'>
      <div className='text-light font-weight-bold text-center'>
      <h2>Get in Touch</h2>
      <h6>Get in touch today and explore project options</h6>
      </div>
      <div className=' d-flex justify-content-center'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className=" md-2 pt-2 g-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
        <FloatingLabel controlId="floatingInputGrid" label="Name">
          <Form.Control required type="text" placeholder="First name" defaultValue="Rohan"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomEmailAddress">
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control required type="email" placeholder="Email address" defaultValue="name@example.com"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
        <FloatingLabel controlId="floatingInputGrid" label="Queries">
            <Form.Control required type="text" placeholder="Queries" defaultValue="Type Any Queries"y/>
            <Form.Control.Feedback type="invalid">
              Please wrtie a apporiate queries.
            </Form.Control.Feedback>
            </FloatingLabel>
        </Form.Group>
        <Form.Group  className='d-flex align-items-center' as={Col} md="1"><Button variant="primary" type="submit">Submit</Button></Form.Group>
      </Row> 
      </Form>
      </div>
      </div>
       </>
    );
}

export default Queries;
import {Col,FloatingLabel,Form,Row,Button } from 'react-bootstrap';
import './style.css'

function Queries() {
    return (
      <div className='Queries d-flex justify-content-center'>
      <Row className=" pt-4 g-4">
      <div className='text-light font-weight-bold text-center'>
      <h2>Get in Touch</h2>
      <h6>Get in touch today and explore project options</h6>
      </div>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Name">
          <Form.Control type="name" placeholder="name" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Question/Comments">
          <Form.Control type="qureies" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col className='d-flex align-items-center'>
      <Button variant="primary" type="submit">
        Submit
      </Button></Col>
      </Row>
      </div>
    );
}

export default Queries;
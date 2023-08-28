import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
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
    <Container style={{marginTop:"30px"}}>
      <Row>
        <Col xs={12} md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Your Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Subject</Form.Label>
                <Form.Control required type="text" placeholder="Subject" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your Message"
                  as="textarea"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Send Email</Button>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12766.899372957596!2d10.3395141!3d36.8730045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b59295202219%3A0x666111cb4f0596a6!2sharmony%20Store!5e0!3m2!1sfr!2stn!4v1693234238802!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Address:</span> Impasse bir sidi tayeb sidi bou said 2026
        </Col>
        <Col>
          <span>Phone:</span> +216 54 154 220
        </Col>
        <Col>
          <span>Email:</span> Malek2013malek@hotmail.fr
        </Col>
        <Col>
          <span>Website:</span>{" "}
          <a href="https://www.harmonystore01.com/">www.harmonystore01.com</a>
        </Col>
      </Row>
    </Container >
  );
}

export default Contact;

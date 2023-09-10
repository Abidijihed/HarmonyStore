import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, attachment: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append("firstName", formData.firstName);
      formDataWithFile.append("email", formData.email);
      formDataWithFile.append("subject", formData.subject);
      formDataWithFile.append("message", formData.message);
      formDataWithFile.append("attachment", formData.attachment);

      // Send the form data to your API endpoint using Axios
      const response = await axios.post("https://www.harmonystore01.com/api/send/email", formDataWithFile);

      // Handle the response (success or failure) here
      if (response.data.status === "success") {
        // Reset the form and state
        form.reset();
        setFormData({
          firstName: "",
          email: "",
          subject: "",
          message: "",
          attachment: null,
        });
        // Handle success, e.g., show a success message or redirect
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Merci pour nous contacter, nous vous répondrons bientôt.',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        // Handle failure, e.g., show an error message
        console.error("Error sending email:", response.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };


  return (
    <Container style={{ marginTop: "50px" }}>
    <h1>Contacter Nous</h1>
      <Row>
        <Col xs={12} md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}  encType="multipart/form-data">
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Votre Nom</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Votre Nom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Sujet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Votre Message"
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Attachment</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png" // Define accepted file types
                  onChange={handleFileChange}
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
          <span>Adresse:</span> Impasse bir sidi tayeb sidi bou said 2026
        </Col>
        <Col>
          <span>Telephone:</span> +216 54 154 220
        </Col>
        <Col>
          <span>Email:</span> Malek2013malek@hotmail.fr
        </Col>
        <Col>
          <span>SitWeb:</span>{" "}
          <a href="https://www.harmonystore01.com/">www.harmonystore01.com</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

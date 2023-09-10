import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

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
        console.log("Email sent successfully!");
      } else {
        // Handle failure, e.g., show an error message
        console.error("Error sending email:", response.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col xs={12} md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Your form fields */}
            {/* ... */}
            <Button type="submit">Send Email</Button>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          {/* Your Google Maps iframe */}
        </Col>
      </Row>
      <Row>
        {/* Your contact information */}
        {/* ... */}
      </Row>
    </Container>
  );
}

export default Contact;

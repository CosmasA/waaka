import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API request to send the form data
  };

  return (
    <Container className="contact-us">
      <Row className="my-5">
        <Col md={6}>
          <h3>Feel free to ask anything</h3>
          <p>
            Have a question about a property? Fill out the form below, and we’ll
            get back to you shortly.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="info"
              style={{ color: "#fff", width: "100%" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Where you can find us</h3>
          <p>Kisaasi-Komamboga, Kampala City, Uganda.</p>
          <div className="map-container">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d32.60005481589312!3d0.37796120027218033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KDQqtC80LTQsdC00LXQvw!5e0!3m2!1sen!2sug!4v1614288572165`}
              width="100%"
              height="380"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

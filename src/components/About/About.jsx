// import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>

        <Card className="about-card">
          <Card.Body>
            {/* <Card.Title className="text-center">Our Mission</Card.Title> */}
            <Card.Text>
              Plotus is committed to providing the best platform for renting and
              selling properties. Your satisfaction is our priority.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        {/* Mission and Vision */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="text-center">Our Mission</Card.Title>
                <Card.Text>
                  “To represent and serve our clients with excellence,
                  integrity, professionalism and with the client’s best interest
                  first.”
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br />
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="text-center">Our Vision</Card.Title>
                <Card.Text>
                  “Supporting tenants and landlords to acquire the most
                  authentic transactions without going through the traditional
                  next home search hassle by providing high quality and
                  customized housing.”
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <h3 className="text-center mb-4">FAQs</h3>
        <Row>
          <Col md={12}>
            <Card className="faq-card">
              <Card.Body>
                <h5>What is Plotus?</h5>
                <p>
                  Plotus is a modern online platform that connects users with
                  property listings for Rent, Hire, or Sale, eliminating the
                  need for traditional property search methods.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How does Plotus work?</h5>
                <p>
                  Registered users can search, browse, and filter properties on
                  our website or mobile app and connect directly with Plotus
                  staff 24/7 for inquiries and assistance where necessary.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How do I search for properties on Plotus?</h5>
                <p>
                  Use our Search bar or filters to find properties by: Location,
                  Type, Price Range, and Amenities.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

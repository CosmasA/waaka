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
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>What types of properties do I find on Plotus?</h5>
                <p>
                  Plotus features houses, Lodges, Land, apartments, and
                  commercial spaces for rent, hire, or sale.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How accurate are property listings on Plotus?</h5>
                <p>
                  We strive for accuracy, but users are responsible for
                  verifying property details with owners or agents.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How does Plotus protect user data and privacy?</h5>
                <p>
                  We employ robust security measures and adhere to data
                  protection policies to safeguard user information.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>
                  Is Plotus involved in payment processing or transactions?
                </h5>
                <p>
                  Yes, Plotus has Plotus Pay that assists our clients to
                  transfer the payments directly to the property owners from
                  their Mobile Money or Bank at zero cost.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How do I make payments or transactions on Plotus?</h5>
                <p>
                  We facilitate connections between users and property owners or
                  agents: transactions are done through Plotus Pay.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How do I contact Plotus support?</h5>
                <p>
                  You can reach us through our: website using the contact us
                  page, application, WhatsApp, phone call, or email for
                  assistance or feedback.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className="mt-4">
            <Card className="faq-card">
              <Card.Body>
                <h5>How does Plotus handle user feedback and complaints?</h5>
                <p>
                  We value user input and address concerns promptly to ensure a
                  smooth user experience.
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

import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Img1 from "../../assets/images/apartment.jpg";
import Img2 from "../../assets/images/home.jpg";
import Img3 from "../../assets/images/room.jpg";
import Img4 from "../../assets/images/plot.jpg";

const featuredProperties = [
  {
    title: "Houses",
    image: Img2, // Replace with your image URL
    description: "Discover beautiful houses available for sale.",
  },
  {
    title: "Rooms",
    image: Img3, // Replace with your image URL
    description: "Explore well-furnished rooms at affordable prices.",
  },
  {
    title: "Apartments",
    image: Img1, // Replace with your image URL
    description: "Find luxurious apartments that suit your lifestyle.",
  },
  {
    title: "Plots",
    image: Img4, // Replace with your image URL
    description: "Buy plots at prime locations for investment.",
  },
];

const Properties = () => {
  return (
    <div className="featured-properties-section">
      <Container>
        <h2 className="text-center mb-4">Featured Properties</h2>
        <Row>
          {featuredProperties.map((property, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={property.image}
                  alt={property.title}
                />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>{property.description}</Card.Text>
                  <Button variant="info" style={{ color: "#fff" }}>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Properties;

import { Card, Button, Container, Row, Col } from "react-bootstrap";
import VillaImg from "../../assets/images/villa.jpg";
import CondoImg from "../../assets/images/condo.jpg";
import CottageImg from "../../assets/images/cottage.jpg";

const popularProperties = [
  {
    title: "Luxury Villa",
    image: VillaImg,
    description:
      "Experience the charm of a spacious villa with a private pool.",
  },
  {
    title: "Modern Condo",
    image: CondoImg,
    description: "A perfect blend of comfort and modern living in the city.",
  },
  {
    title: "Cozy Cottage",
    image: CottageImg,
    description:
      "Find peace and tranquility in a beautiful countryside cottage.",
  },
];

const Popular = () => {
  return (
    <div className="popular-properties-section">
      <Container>
        <h2 className="text-center mb-4">Popular Properties</h2>
        <Row>
          {popularProperties.map((property, index) => (
            <Col md={4} sm={12} key={index} className="mb-4">
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
                    Explore
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

export default Popular;

import { Container, Row, Col, Card } from "react-bootstrap";
import ValuesImage from "../../assets/images/apartment.jpg"; // Replace with your image path

const CoreValues = () => {
  const values = [
    {
      title: "Experience and Professionalism",
      description:
        "With years of expertise, we bring unmatched knowledge and skills to provide top-notch services.",
    },
    {
      title: "Transparency",
      description:
        "We are committed to honesty and openness in every aspect of our work.",
    },
    {
      title: "Customized Solutions",
      description:
        "Tailored services designed to meet your unique needs and goals.",
    },
  ];

  return (
    <div className="core-values-section py-4">
      <Container>
        <Row className="align-items-center">
          {/* Cards for Core Values */}
          <Col md={6}>
            <h2 className="mb-4">Our Core Values</h2>
            <Row>
              {values.map((value, index) => (
                <Col md={12} className="mb-4" key={index}>
                  <Card className="core-value-card animate__animated animate__fadeInLeft">
                    <Card.Body>
                      <Card.Title className="core-value-title">
                        {value.title}
                      </Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Image */}
          <Col md={6}>
            <img
              src={ValuesImage}
              alt="Core Values"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoreValues;

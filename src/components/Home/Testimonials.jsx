import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import TestimonialImage from "../../assets/images/user.png"; // Replace with your image path

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: TestimonialImage, // Replace with actual customer image
      feedback:
        "I had a great experience renting through this platform! It was easy to navigate and the process was seamless.",
    },
    {
      name: "Jane Smith",
      image: TestimonialImage, // Replace with actual customer image
      feedback:
        "The buying process was simple and transparent. I found the perfect property and everything was handled smoothly.",
    },
    {
      name: "Samuel Lee",
      image: TestimonialImage, // Replace with actual customer image
      feedback:
        "Great platform with customized solutions. I was able to find exactly what I needed, and the customer support was excellent.",
    },
  ];

  return (
    <div className="testimonials-section py-5">
      <Container>
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Row>
          <Col md={12}>
            {/* Testimonial Carousel */}
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="testimonial-card">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={3}>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="testimonial-image"
                          />
                        </Col>
                        <Col md={9}>
                          <Card.Title>{testimonial.name}</Card.Title>
                          <Card.Text>{testimonial.feedback}</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;

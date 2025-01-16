import { Container, Row, Col, Card } from "react-bootstrap";
import TestimonialImage from "../../assets/images/user.png"; // Replace with your image path

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: TestimonialImage,
      feedback:
        "I had a great experience renting through this platform! It was easy to navigate and the process was seamless.",
    },
    {
      name: "Jane Smith",
      image: TestimonialImage,
      feedback:
        "The buying process was simple and transparent. I found the perfect property and everything was handled smoothly.",
    },
    {
      name: "Samuel Lee",
      image: TestimonialImage,
      feedback:
        "Great platform with customized solutions. I was able to find exactly what I needed, and the customer support was excellent.",
    },
    {
      name: "Johnstone Arthur",
      image: TestimonialImage,
      feedback:
        "I had a great experience renting through this platform! It was easy to navigate and the process was seamless.",
    },
    {
      name: "Peter Drury",
      image: TestimonialImage,
      feedback:
        "The buying process was simple and transparent. I found the perfect property and everything was handled smoothly.",
    },
    {
      name: "Larry Smith",
      image: TestimonialImage,
      feedback:
        "Great platform with customized solutions. I was able to find exactly what I needed, and the customer support was excellent.",
    },
  ];

  return (
    <div className="testimonials-section py-4">
      <Container>
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="text-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image rounded-circle"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <Card.Title className="text-center">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {testimonial.feedback}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;

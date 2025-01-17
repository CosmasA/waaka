import { Button, Carousel } from "react-bootstrap";
import Img1 from "../../assets/images/apartment.jpg";
import Img2 from "../../assets/images/home.jpg";
import Img3 from "../../assets/images/room.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Img1} alt="First slide" />
          <Carousel.Caption>
            <h1>Welcome to Plotus</h1>
            <p>
              Your one-stop solution platform for renting, hiring and selling
              properties.
            </p>
            <Button variant="info" style={{ color: "#fff" }} size="lg">
              Learn More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Explore Our Properties</h1>
            <p>
              Discover a variety of the available properties to simplify your
              life.
            </p>
            <Button variant="info" style={{ color: "#fff" }} size="lg">
              Get Started
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Img3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Talk to Us</h1>
            <p>
              Connect with like-minded individuals and share ideas and
              experiences.
            </p>
            <Button variant="info" style={{ color: "#fff" }} size="lg">
              Join Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;

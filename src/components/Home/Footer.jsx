import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best platform for renting and
              selling properties. Your satisfaction is our priority.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#properties" className="footer-link">
                  Properties
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Plotus. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

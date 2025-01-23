import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={3} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best platform for renting and
              selling properties. Your satisfaction is our priority.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#properties" className="footer-link">
                  Properties
                </Link>
              </li>
            </ul>
          </Col>

          {/* Addresss */}
          <Col md={3}>
            <h5>Address</h5>
            <p>Kisaasi-Komamboga,</p>
            <p>Kampala City, Uganda</p>
            <p>Ntare Road,</p>
            <p>Mbarara City, Western Uganda</p>
            <p>Phone: +256 775 123 456</p>
            <p>Email: plotusuganda@gmail.com</p>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://whatsapp.com"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
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

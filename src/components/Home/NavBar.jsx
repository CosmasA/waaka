import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const userName = "Apuke Cosmas";

  // State to manage the navbar collapse
  const [expanded, setExpanded] = useState(false);

  // Close the navbar when a link is clicked
  const handleLinkClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <Navbar
      expand="lg"
      className="navbar fixed-top"
      expanded={expanded} // Control expanded state
      onToggle={() => setExpanded(!expanded)} // Toggle on button click
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="app_logo" />
          Plotus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
            <Nav.Link href="#property" onClick={handleLinkClick}>
              Properties
            </Nav.Link>

            {/* User Profile Section */}
            <NavDropdown
              title={
                <span className="profile">
                  <FaUser className="fa-user" /> {userName}
                </span>
              }
              id="user-profile-dropdown"
            >
              <NavDropdown.Item href="#profile" onClick={handleLinkClick}>
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#settings" onClick={handleLinkClick}>
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout" onClick={handleLinkClick}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            {/* Cart Section */}
            <Nav.Link href="#cart" onClick={handleLinkClick}>
              <FaShoppingCart /> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const userName = "Apuke Cosmas";

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar fixed-top">
        <Container>
          <Navbar.Brand href="/waaka" className="navbar-brand">
            Plotus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/waaka">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#property">Properties</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>

              {/* User Profile Section */}
              <NavDropdown
                title={
                  <span className="profile">
                    <FaUser className="fa-user" /> {userName}
                  </span>
                }
                id="user-profile-dropdown"
              >
                <NavDropdown.Item href="#profile">
                  View Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>

              {/* Cart Section */}
              <Nav.Link href="#cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tip Calculator</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">in React</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{borderBottom:'1px solid black'}}>
      <Container>
        <Navbar.Brand style={{letterSpacing:"4px"}} ><b>Products List</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to='/addproduct'>
          <Button variant="success"className="mx-2">ADD</Button>
            </Link>
          <Button variant="danger"className="mx-2">MASS DELETE</Button>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
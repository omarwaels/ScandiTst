import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function NavInsertPage() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{borderBottom:'1px solid black'}}>
      <Container>
        <Navbar.Brand style={{letterSpacing:"4px"}} ><b>Products ADD</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Button variant="primary"className="mx-2">SAVE</Button>
          <Link to='/'>
          <Button variant="warning"className="mx-2">CANCEL</Button>
            </Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavInsertPage;
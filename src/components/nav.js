import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext  } from 'react';
import {RemoveContext} from '../Productcontext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
// import RemoveitemContext from '../Productcontext';
// import { useContext } from 'react';
function NavBar() {
  const navigate  = useNavigate();
  let {removeProductsArr} = useContext(RemoveContext);
  const handleDel = (event)=>{
    console.log(1);
    event.preventDefault();
    if (removeProductsArr.length == 0){
      return
    }
    removeProductsArr = Object.assign({}, removeProductsArr);
    axios.post("http://localhost/scandiTest/server/",JSON.stringify(removeProductsArr));
    removeProductsArr= [];

  }

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
          <Button variant="danger"className="mx-2" onClick={handleDel }>MASS DELETE</Button>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
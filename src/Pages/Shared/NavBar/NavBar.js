import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">ToyGhar <strong>BD</strong> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0" variant="pills" defaultActiveKey="/home"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                  </Nav>
                  <div className="d-flex">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                    
                    </div>
                    {user?.email ?
                    <Nav>
                      <Nav.Link as={Link} to="/adminDashboard">Admin</Nav.Link>
                      <Button onClick={logOut} variant="light">Logout</Button> 
                    </Nav>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
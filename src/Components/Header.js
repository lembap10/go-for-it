import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return <header>
    <Navbar bg="primary" variant = 'dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href="/">GoForIt</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to='/'>
            <Nav.Link>
              <i className='fas fa-login'></i>Login
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
            <Nav.Link>
              <i className='fas fa-register'></i>Register
            </Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
};

export default Header;

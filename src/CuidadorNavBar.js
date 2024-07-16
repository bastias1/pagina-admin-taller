import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBarCuidador = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Pagina del Cuidador</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/cuidador/ingreso-adulto">
              <Nav.Link>Ingresar Adulto Mayor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cuidador/delete-adulto">
              <Nav.Link>Eliminar Usuario</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cuidador/update-user">
              <Nav.Link>Actualizar Usuario</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cuidador/GPS">
              <Nav.Link>GPS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBarCuidador;

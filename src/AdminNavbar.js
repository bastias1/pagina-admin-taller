import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBarAdmin = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Pagina de Administrador</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/admin/create-user">
              <Nav.Link>Crear Usuario</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/delete-user">
              <Nav.Link>Eliminar Usuario</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/update-user">
              <Nav.Link>Actualizar Usuario</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/GPS">
              <Nav.Link>GPS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBarAdmin;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    rol: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/usuarios', formData)
      .then(response => {
        console.log('User created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Crear Usuario</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre"
                  />
                </Form.Group>

                <Form.Group controlId="formApellido" className="mt-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ingrese el apellido"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese el email"
                  />
                </Form.Group>

                <Form.Group controlId="formContrasena" className="mt-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    placeholder="Ingrese la contraseña"
                  />
                </Form.Group>

                <Form.Group controlId="formRol" className="mt-3">
                  <Form.Label>Rol</Form.Label>
                  <Form.Control
                    as="select"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione un rol</option>
                    <option value="cuidador">Cuidador</option>
                    <option value="administrador">Administrador</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Crear Usuario
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminForm;

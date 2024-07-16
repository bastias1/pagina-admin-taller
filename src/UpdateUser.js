import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const UpdateUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/usuarios/${selectedUser}`, { email: newEmail })
      .then(response => {
        console.log('User email updated successfully:', response.data);
        fetchUsers(); // Refresh the list of users
      })
      .catch(error => {
        console.error('There was an error updating the email!', error);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Actualizar Email de un Usuario</Card.Header>
            <Card.Body>
              <Form onSubmit={handleUpdate}>
                <Form.Group controlId="formUserSelect">
                  <Form.Label>Seleccione un Usuario</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                  >
                    <option value="">Seleccionar Usuario</option>
                    {users.map(user => (
                      <option key={user.IDUsuario} value={user.IDUsuario}>
                        {user.Nombre} {user.Apellido} ({user.Email})
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Nuevo Correo</Form.Label>
                  <Form.Control
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Ingrese el correo nuevo"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Actualizar Correo
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateUser;

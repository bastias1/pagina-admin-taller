import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const AdultoMayorForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    informacionMedica: '',
    contactoEmergencia: ''
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
    axios.post('http://localhost:5000/api/adultosmayores', formData)
      .then(response => {
        console.log('Adulto Mayor created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the adult!', error);
      });
  };
  
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Crear Adulto Mayor</Card.Header>
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

                <Form.Group controlId="formInformacionMedica" className="mt-3">
                  <Form.Label>Información Médica</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="informacionMedica"
                    value={formData.informacionMedica}
                    onChange={handleChange}
                    placeholder="Ingrese la información médica"
                  />
                </Form.Group>

                <Form.Group controlId="formContactoEmergencia" className="mt-3">
                  <Form.Label>Contacto de Emergencia</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactoEmergencia"
                    value={formData.contactoEmergencia}
                    onChange={handleChange}
                    placeholder="Ingrese el contacto de emergencia"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Crear Adulto Mayor
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdultoMayorForm;

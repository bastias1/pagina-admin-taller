import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const AdultoMayorList = () => {
  const [adultosMayores, setAdultosMayores] = useState([]);

  useEffect(() => {
    fetchAdultosMayores();
  }, []);

  const fetchAdultosMayores = () => {
    axios.get('http://localhost:5000/api/adultosmayores')
      .then(response => {
        setAdultosMayores(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the adultos mayores!', error);
      });
  };

  const deleteAdultoMayor = (id) => {
    axios.delete(`http://localhost:5000/api/adultosmayores/${id}`)
      .then(response => {
        console.log('Adulto Mayor deleted successfully:', response.data);
        fetchAdultosMayores(); // Refresh the list of adultos mayores
      })
      .catch(error => {
        console.error('There was an error deleting the adulto mayor!', error);
      });
  };

  return (
    <Container className="mt-5">
      <h2>Lista de Adultos Mayores</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Información Médica</th>
            <th>Contacto de Emergencia</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adultosMayores.map(adultoMayor => (
            <tr key={adultoMayor.IDAdulto}>
              <td>{adultoMayor.IDAdulto}</td>
              <td>{adultoMayor.Nombre}</td>
              <td>{adultoMayor.Apellido}</td>
              <td>{adultoMayor.InformacionMedica}</td>
              <td>{adultoMayor.ContactoEmergencia}</td>
              <td>
                <Button variant="danger" onClick={() => deleteAdultoMayor(adultoMayor.IDAdulto)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdultoMayorList;

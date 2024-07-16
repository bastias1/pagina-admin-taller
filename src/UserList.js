import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/usuarios');
      console.log('Fetched users:', response.data);

      // Verificar que la respuesta sea un arreglo
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error('Fetched data is not an array:', response.data);
        setError('Fetched data is not an array');
      }
    } catch (error) {
      console.error('There was an error fetching the users!', error);
      setError('There was an error fetching the users!');
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/usuarios/${id}`);
      console.log('User deleted successfully:', response.data);
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error('There was an error deleting the user!', error);
      setError('There was an error deleting the user!');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Lista de Usuarios</h2>
      {error && <p className="text-danger">{error}</p>}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map(user => (
              <tr key={user.IDUsuario}>
                <td>{user.IDUsuario}</td>
                <td>{user.Nombre}</td>
                <td>{user.Apellido}</td>
                <td>{user.Email}</td>
                <td>{user.Rol}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteUser(user.IDUsuario)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
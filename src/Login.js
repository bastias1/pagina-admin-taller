import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.data.success) {
                const role = response.data.role;
                if (role === 'admin') {
                    navigate('/admin');
                } else if (role === 'cuidador') {
                    navigate('/cuidador');
                } else {
                    navigate('/user');
                }
            } else {
                setError('Correo o contraseña incorrectos');
            }
        } catch (error) {
            setError('Error en la conexión con el servidor');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'white' }}>
            <Form onSubmit={handleSubmit} className="p-4 border rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="mb-3">Login</h3>
                {error && <p className="text-danger">{error}</p>}
                <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;

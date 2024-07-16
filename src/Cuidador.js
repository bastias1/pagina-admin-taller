import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdultoMayorForm from './AdultoMayorForm';

const Cuidador = () => {
    const [adultos, setAdultos] = useState([]);
    const [selectedAdulto, setSelectedAdulto] = useState(null);

    useEffect(() => {
        fetchAdultos();
    }, []);

    const fetchAdultos = async () => {
        try {
            const response = await axios.get('http://localhost:8000/adultos'); // Change the URL to your actual endpoint
            setAdultos(response.data);
        } catch (error) {
            console.error('Error fetching adultos:', error);
        }
    };

    const handleSave = async (adulto) => {
        try {
            if (selectedAdulto) {
                await axios.put(`http://localhost:8000/adultos/${selectedAdulto.IDAdulto}`, adulto);
            } else {
                await axios.post('http://localhost:8000/adultos', adulto);
            }
            fetchAdultos();
            setSelectedAdulto(null);
        } catch (error) {
            console.error('Error saving adulto:', error);
        }
    };

    const handleEdit = (adulto) => {
        setSelectedAdulto(adulto);
    };

    return (
        <div className="container">
            <h1 className="my-4">Gestión de Adultos Mayores</h1>
            <AdultoMayorForm existingData={selectedAdulto} onSave={handleSave} />
            <h2 className="my-4">Lista de Adultos Mayores</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Información Médica</th>
                        <th>Contacto de Emergencia</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {adultos.map((adulto) => (
                        <tr key={adulto.IDAdulto}>
                            <td>{adulto.Nombre}</td>
                            <td>{adulto.Apellido}</td>
                            <td>{adulto.InformacionMedica}</td>
                            <td>{adulto.ContactoEmergencia}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={() => handleEdit(adulto)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cuidador;

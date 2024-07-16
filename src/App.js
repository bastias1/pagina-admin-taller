import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioSesion from './Login';
import AppAdmin from './AppAdmin';
import AppCuidador from './AppCuidador';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InicioSesion />} />
                <Route path="/admin/*" element={<AppAdmin />} />
                <Route path="/cuidador/*" element={<AppCuidador />} />
            </Routes>
        </Router>
    );
}

export default App;

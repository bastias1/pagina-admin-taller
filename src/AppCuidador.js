import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GPSTracker from './GPSTracker';
import NavigationBarCuidador from './CuidadorNavBar';
import AdultoMayorForm from './AdultoMayorForm';
import AdultoMayorList from './AdultoMayorList';

function AppAdmin() {
  return (
    <div className="App">
      <NavigationBarCuidador />
      <Routes>
      <Route path="GPS" element={<GPSTracker />} />
        <Route path="ingreso-adulto" element={<AdultoMayorForm />} />
        <Route path="delete-adulto" element={<AdultoMayorList />} />
        <Route path="/" element={<h1>Pagina del Cuidador</h1>} />
      </Routes>
    </div>
  );
}

export default AppAdmin;

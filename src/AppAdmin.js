import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBarAdmin from './AdminNavbar';
import AdminForm from './AdminForm';
import UserList from './UserList';
import UpdateUser from './UpdateUser';
import GPSTracker from './GPSTracker';

function AppAdmin() {
  return (
    <div className="App">
      <NavigationBarAdmin />
      <Routes>
        <Route path="create-user" element={<AdminForm />} />
        <Route path="delete-user" element={<UserList />} />
        <Route path="update-user" element={<UpdateUser />} />
        <Route path="GPS" element={<GPSTracker />} />
        <Route path="/" element={<h1>Pagina de Administrador</h1>} />
      </Routes>
    </div>
  );
}

export default AppAdmin;

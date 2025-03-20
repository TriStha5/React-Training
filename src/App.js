import React, { useState } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Setting from './pages/Setting';
import UserAdd from './pages/users/UserAdd';
import Login from './pages/auth/Login';
import Layout from './components/Layout';
import UserDetails from './pages/users/UserDetails';
import { UserContext } from './context/user.context';


const App = () => {

  const [_user, _setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

  return(
    <UserContext.Provider value={{_user, _setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users title="Users"/>} />
            <Route path="/users/addUser" element={<UserAdd />} />
            <Route path="/users/edit/:userId" element={<UserAdd />} />
            <Route path="/users/details/:userId" element={<UserDetails />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
 
export default App;
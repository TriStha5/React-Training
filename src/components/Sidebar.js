import { NavLink, useNavigate } from "react-router";
import React, { useContext } from 'react';
import { UserContext } from '../context/user.context';

const Sidebar = ({ activeItem }) => {
  const { _user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('is_Login', 0);
    navigate('/login');
  }
  return (
    <div className="v-coloum sidebar">
      <div className="demo-logo-vertical" >
             <img src="https://www.virinchicollege.edu.np/storage/site/941680252040.png" alt="logo" style={{height: 90, padding: 25}} />
           </div>
           <div style={{color: "#ffffff", padding: 30}}>{_user?.email}</div>
          <h2>Sidebar</h2>
      <ul>
        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink></li>
        <li><NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>Users</NavLink></li>
        <li><NavLink to="/setting" className={({ isActive }) => (isActive ? "active" : "")}>Setting</NavLink></li>
        <button type="button" onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  );
}

export default Sidebar;
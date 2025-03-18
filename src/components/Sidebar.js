import { NavLink, useNavigate } from "react-router";

const Sidebar = ({ activeItem }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('is_Login', 0);
    navigate('/login');
  }
  return (
    <div className="v-coloum sidebar">
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
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Setting from './pages/Setting';
import UserAdd from './pages/users/UserAdd';
import Login from './pages/auth/Login';
import Layout from './components/Layout';
import UserDetails from './pages/users/UserDetails';


const App = () => {

  return(
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
  );
}
 
export default App;
import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout =() => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLogin = localStorage.getItem('is_Login');
        if(isLogin !== '0'){
            navigate('/login');
        }
    },[navigate]);
    return(
        <div className="main">
            <Header />
            <div className="v-row main-body">
                <Sidebar />
                <div className="v-coloum body">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div> 
    )
}

export default Layout;

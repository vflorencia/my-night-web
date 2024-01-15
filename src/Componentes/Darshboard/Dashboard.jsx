import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar/Sidebar';
import './Styles/style.css'

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/loginadmin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div className='cont-dash'>
      {isAuthenticated ? (
        <div className='content-dash'>
          <h1 className='heading-dash'>Bienvenido al Dashboard</h1>
        </div>
      ) : null}
    </div>
  );
}

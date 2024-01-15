import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TicketsSales() {

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

  return (
    <div className='cont-dash'>
    {isAuthenticated ? (
      <div className='content-dash'>
        <h1 className='heading-dash'>Bienvenido al Dashboard</h1><br/><br/><br/>
        <h1 className='heading-dash'>Ventas de Entradas</h1>
      </div>
    ) : null}
  </div>
  )
}

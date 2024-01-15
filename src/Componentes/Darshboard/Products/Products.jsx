import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Products() {

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
        <h1 className='heading-dash'>Bienvenido al Dashboard</h1>
        <h1 className='heading-dash'>Categorías y Productos</h1>
      </div>
    ) : null}
  </div>
  )
}

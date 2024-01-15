import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Styles/style.css'

export default function LoginAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem('isAuthenticated') === 'true'
    );
    const navigate = useNavigate();

    const handleLogin = () => {
      if (username === 'admin' && password === 'admin') {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else if (username !== 'admin') {
        showError('Usuario Incorrecto');
      } else {
        showError('Contraseña Incorrecta');
      }
    };

    const handleLogout = () => {
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      navigate('/loginadmin');
    };

    const showError = (message) => {
      Swal.fire({
        title: message,
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#242424',
        color: 'white',
        backdrop: 'rgba(0,0,000,0.4)',
      });
    };
  
    return (
      <div className="cont-login-ad">
        
        <div className='form-login-ad'>
        <h2>Administrador</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-login-ad'
            
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-login-ad'
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      </div>

    );
  };

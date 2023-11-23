import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { UilUserCircle } from '@iconscout/react-unicons'

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated  } = useAuth0();

  return (
    <div className='navbar'>
        <div className="n-left">
            <a href="/"><h1>MY NIGHT</h1></a>
        <ul>
            <li>
                <a href="/eventos">Explorar eventos</a>
            </li>
            <li>
                <a href="/quienes-somos">Nosotros</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/ayuda">Ayuda</a>
            </li>
        </ul>
        </div>

        <div className="n-right">
            {isAuthenticated? 
            <>
                <a href="/perfil"><UilUserCircle size="50"  /></a>
                <button onClick={logout}>Cerrar sesión</button>
            </>
            :
                <button onClick={loginWithRedirect}>Ingresar</button>
            }
        </div>
    </div>
  )
}


    

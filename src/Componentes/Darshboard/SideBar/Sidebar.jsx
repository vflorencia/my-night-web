import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/loginadmin');
  };

  return (

    <div className="sideBar_dash">
        <nav>
        <ul className="side-nav">
          <li id="side-nav-resume">
            <a href="/dashboard">
              <span>Resumen</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/bartenders">
              <span>Bartenders</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/products">
              <span>Productos</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/product-sales">
              <span>Ventas de Productos</span>
            </a>
          </li>
          <li id="side-nav-sales">
            <a href="/dashboard/ticket-sales">
              <span>Ventas de Entradas</span>
            </a>
          </li>

          <a className="cerrarSesion" >
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </a>

        </ul>
      </nav>
    </div>

  );
}

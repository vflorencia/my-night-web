import React from 'react';
import './Perfil.css'
import { useAuth0 } from "@auth0/auth0-react";
import {tickets} from './Tickets/entradas'
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom';


export default function Perfil() {

  const { user } = useAuth0()
  const navigate = useNavigate()


  return (
    <>
<div className="container-perfil">
      <h2>Mi Perfil</h2>
      <div className="datos-personales">
        <p>Hola !</p>
        { user? <p> {user.name} </p> : <Loader /> }
      </div>
 
      <div className="container-ticket">
        <h2>Entradas</h2>
        {tickets.length === 0 ? (
        <div className="noevents">
          <p>Todavia no compraste nada.</p>
          <button onClick={()=> navigate('/eventos')}>Comprar entradas</button>
          
        </div>
         
        ) : (
          <div className="cards">
          { tickets.map(ticket => (
          // <Link to={`/eventos/${event.id}`} key={event.id} className="evento-card2">
            <div className="card">
              <p id='fecha'>Fecha de compra: </p>
              <div id='linea'></div>
              <h3>{ticket.name}</h3>
              <p>Fecha: {ticket.date.toLocaleDateString()} | Hora: {ticket.date.toLocaleTimeString()}</p>
              <p className="">Precio: ${ticket.price}</p>
            </div>
          // </Link>
        ))}
          </div>
          
      )}


      </div>
    </div>
    </>

  )
}

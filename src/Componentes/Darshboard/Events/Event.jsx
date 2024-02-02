import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteEvents, getAllEvents } from '../../../redux/actions';

export default function Events() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const events = useSelector((state)=> state.events)
  console.log(events);

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthentication();
    dispatch(getAllEvents())
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/loginadmin');
    }
  }, [isAuthenticated, navigate]);

  const handleDeleteEvent = (eventId) =>  {
    dispatch(deleteEvents(eventId));
     navigate("/dashboard/events")
   };

   return (
    <div className='cont-dash'>
      {isAuthenticated ? (
        <div className='content-dash'>
          <h1 className='heading-dash'>Eventos</h1>
          <button className='btn-create-dash' onClick={()=> navigate("/dashboard/events/create")}>Agregar Nuevo Evento</button>

          <table className={`table`}>
            <thead>
              <tr className="table-head">
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
                <th scope="col">Categorías</th>
                <th scope="col">Borrar</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => {
                return (
                  <tr className="table-body">
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>{e.price}</td>
                    <td className="table-img">{e.image}</td>
                    <td>{e.categories}</td>
                    <td className="table-delete">
                      <button onClick={() => handleDeleteEvent(e.id)}>Borrar</button>
                    </td>
                    <td className="table-update">
                        <button onClick={() => navigate(`/dashboard/events/${e.id}`)}>Editar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

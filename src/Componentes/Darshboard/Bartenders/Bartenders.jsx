import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createBartender, deleteBartender, getAllBartenders, updateBartender } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Bartenders() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bartenders = useSelector((state)=> state.bartenders)
  console.log(bartenders);

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthentication();
    dispatch(getAllBartenders());
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/loginadmin');
    }
  }, [isAuthenticated, navigate]);
  
    const handleDeleteBartender = (bartenderId) =>  {
     dispatch(deleteBartender(bartenderId));
      navigate("/dashboard/bartenders")
    };

  return (
    <div className='cont-dash'>
      {isAuthenticated ? (
        <div className='content-dash'>
          <h1 className='heading-dash'>Bartenders</h1>
          <button className='btn-create-dash' onClick={()=> navigate("/dashboard/bartenders/create")}>Agregar Bartender</button>

          <table className={`table`}>
            <thead>
              <tr className="table-head">
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Usuario</th>
                <th scope="col">Imagen</th>
                <th scope="col">Creado</th>
                <th scope="col">Borrar</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              {bartenders.map((e) => {
                return (
                  <tr className="table-body">
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{e.userName}</td>
                    <td className="table-img">{e.img}</td>
                    <td>{e.createdAt}</td>
                    <td className="table-delete">
                      <button onClick={() => handleDeleteBartender(e.id)}>Borrar</button>
                    </td>
                    <td className="table-update">
                        <button onClick={() => navigate(`/dashboard/bartenders/${e.id}`)}>Editar</button>
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
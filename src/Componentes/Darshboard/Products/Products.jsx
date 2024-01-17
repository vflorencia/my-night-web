import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProducts, getAllProducts } from '../../../redux/actions';

export default function Products() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products)
  console.log(products);

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthentication();
    dispatch(getAllProducts())
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/loginadmin');
    }
  }, [isAuthenticated, navigate]);

  const handleDeleteProduct = (productId) =>  {
    dispatch(deleteProducts(productId));
     navigate("/dashboard/products")
   };

   return (
    <div className='cont-dash'>
      {isAuthenticated ? (
        <div className='content-dash'>
          <h1 className='heading-dash'>Productos</h1>
          <button className='btn-create-dash' onClick={()=> navigate("/dashboard/products/create")}>Agregar Nuevo Producto</button>

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
              {products.map((e) => {
                return (
                  <tr className="table-body">
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>{e.price}</td>
                    <td className="table-img">{e.image}</td>
                    <td>{e.categories}</td>
                    <td className="table-delete">
                      <button onClick={() => handleDeleteProduct(e.id)}>Borrar</button>
                    </td>
                    <td className="table-update">
                        <button onClick={() => navigate(`/dashboard/products/${e.id}`)}>Editar</button>
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

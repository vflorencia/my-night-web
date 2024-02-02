import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders  } from "../../../redux/actions"

export default function ProductsSales() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders)

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(isAuthenticated);
    };
    checkAuthentication();
    dispatch(getAllOrders())
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
          <h1 className='heading-dash'>Ventas de Productos</h1>

          <table className='table'>
            <thead>
              <tr className='table-head'>
                <th>ID de Orden</th>
                <th>Detalle de Compra</th>
                <th>$ Total</th>
                <th>Cliente</th>
                <th>Bartender</th>
                <th>Fecha y Hora de la compra</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => (
                <tr key={order.id} className='table-body'>
                  <td>{order.id}</td>
                  <td>
                    <ul>
                      {order.productsOrders.map(productOrder => (
                        <li key={productOrder.id}>- {productOrder.product.name}  ({productOrder.product.description})</li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.price}</td>
                  <td>{order.user.firstName} {order.user.lastName} <br/>{order.user.email}</td>
                  <td>{order.bartender ? `${order.bartender.firstName} ${order.bartender.lastName}` : 'Sin asignar'}</td>
                  <td>{order.updatedAt}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProducts } from '../../../redux/actions';
import ProductForm from './ProductForm';

const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(createProducts(formData));
    navigate("/dashboard/products")
  };

  return (
    <div>
      <h2>Añadir un nuevo Producto</h2>
      <ProductForm onSubmit={handleSubmit} initialValues={{}} />
    </div>
  );
};

export default ProductCreate;

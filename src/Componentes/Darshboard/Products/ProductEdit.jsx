import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllProducts, updateProduct } from '../../../redux/actions';
import ProductForm from './ProductForm';

const ProductEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const foundProduct = products.find((b) => b.id === Number(id));
    setCurrentProduct(foundProduct || {});
  }, [products, id]);

  const handleUpdate = (formData) => {
    dispatch(updateProduct(id, formData));
    navigate("/dashboard/products");
  };

  return (
    <div>
      <h2>Editar Datos</h2>
      <ProductForm onSubmit={handleUpdate} initialValues={currentProduct} />
    </div>
  );
};

export default ProductEdit;


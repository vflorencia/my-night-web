// ProductForm.js
import React, { useEffect, useState } from 'react';

const ProductForm = ({ onSubmit, initialValues }) => {
  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    categories: []
  })

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' name="name" value={formData.name} onChange={handleChange} />
        <input type="text" placeholder='Descripción' name="description" value={formData.description} onChange={handleChange} />
        <input type="number" placeholder='Precio' name="price" value={formData.price} onChange={handleChange} />
        <input type="text" placeholder='Imagen' name="image" value={formData.image} onChange={handleChange} />
        <input type="text" placeholder='Categoría' name="categories" value={formData.password} onChange={handleChange} />
      
      <button type="submit">OK</button>
    </form>
  );
};

export default ProductForm;

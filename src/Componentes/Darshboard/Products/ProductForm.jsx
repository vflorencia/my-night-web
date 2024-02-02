import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, loginUsuario } from '../../../redux/actions';

const ProductForm = ({ onSubmit, initialValues }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    categories: [],
  });

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelect = (e) => {
    const { value, textContent } = e.target.options[e.target.selectedIndex];
    setFormData((prevData) => ({
      ...prevData,
      categories: [
        ...(Array.isArray(prevData.categories) ? prevData.categories : []),
        { id: value, name: textContent },
      ],
    }));
  };

  const handleDelete = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      categories: prevData.categories.filter((cat) => cat !== category),
    }));
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

      <div>
        <label>Categorías:</label>
        <select
          onChange={(e) => handleSelect(e)}
        >
          <option value="" hidden>
            Seleccionar categoría
          </option>
          {categories && categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

      </div>

      <div className='selectedByUser'>
        {formData.categories?.map((category) => (
          category ? 
          <div key={category.id} className='categories'>
            <p>{category.name}</p>
            <button type="button" onClick={() => handleDelete(category.id)}>x</button>
          </div> : null
        ))}
      </div>

      <button type="submit">OK</button>
    </form>
  );
};
export default ProductForm;

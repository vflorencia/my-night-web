// CategoryForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, getAllCategories } from '../../../../redux/actions';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories); // Asegúrate de ajustar esto según la estructura real de tu estado

  const [newCategory, setNewCategory] = useState('');

  const handleCreateCategory = () => {
    dispatch(createCategory({ name: newCategory }));
    setNewCategory('');
  };

  useEffect(() => {
   dispatch(getAllCategories())
  }, [dispatch]);

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nueva categoría"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleCreateCategory}>Crear Categoría</button>
    </div>
  );
};

export default CategoryForm;

// CategoryForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post('/categories', { name: categoryName });
      console.log(response.data);
      // Puedes actualizar el estado o realizar otras acciones después de crear la categoría
    } catch (error) {
      console.error('Error creating category:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleCreateCategory}>Create Category</button>
    </div>
  );
};

export default CategoryForm;

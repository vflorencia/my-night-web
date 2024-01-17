import React, { useState, useEffect } from 'react';

const BartenderForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    img: '',
  });

  useEffect(() => {
    // Si initialValues se proporciona, significa que estamos en modo de edición
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' name="firstName" value={formData.firstName} onChange={handleChange} />
        <input type="text" placeholder='Apellido' name="lastName" value={formData.lastName} onChange={handleChange} />
        <input type="text" placeholder='Correo' name="email" value={formData.email} onChange={handleChange} />
        <input type="text" placeholder='Nombre de Usuario' name="userName" value={formData.userName} onChange={handleChange} />
        <input type="text" placeholder='Contraseña' name="password" value={formData.password} onChange={handleChange} />
        <input type="text" placeholder='Imagen' name="img" value={formData.img} onChange={handleChange} />
      
      <button type="submit">OK</button>
    </form>
  );
};

export default BartenderForm;

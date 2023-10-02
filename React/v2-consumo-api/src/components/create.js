import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function Create() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    checkbox: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, checkbox: !formData.checkbox });
  };

  const handleSubmit = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, formData)
      .then(() => {
        console.log('Registro creado con éxito');
      })
      .catch((error) => {
        console.error('Error al crear el registro:', error);
      });
  };

  return (
    <div>
      <h2>Crear Nuevo Registro</h2>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Checkbox</label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleCheckboxChange}
          />
        </Form.Field>
        <Button onClick={handleSubmit}>Crear Registro</Button>
      </Form>

    </div>
  );
}
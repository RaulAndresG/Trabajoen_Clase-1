import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function Edit() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    checkbox: false,
  });

  useEffect(() => {
    const id = localStorage.getItem('id');

    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then((response) => {
        const data = response.data;
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, checkbox: !formData.checkbox });
  };

  const handleSubmit = () => {
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${formData.id}`, formData)
      .then(() => {
        console.log('Registro actualizado con éxito');
        history.push('/read'); 
      })
      .catch((error) => {
        console.error('Error al actualizar el registro:', error);
      });
  };

  return (
    <div>
      <h2>Editar Registro</h2>
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
        <Button onClick={handleSubmit}>Guardar Cambios</Button>
      </Form>
    </div>
  );
}
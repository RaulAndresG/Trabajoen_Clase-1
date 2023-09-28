import React, { useState } from 'react';

function AddProduct({ addProduct }) {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() !== '') {
      addProduct(productName);
      setProductName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddProduct;

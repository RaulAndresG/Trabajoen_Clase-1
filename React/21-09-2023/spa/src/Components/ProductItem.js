import React from 'react';

function ProductItem({ product, onUpdate, onDelete }) {
  return (
    <li>
      <span
  style={{
    textDecoration: product.purchased ? 'none' : 'none',
    borderBottom: product.purchased ? '2px solid red' : 'none',
  }}      >
        {product.name}
      </span>
      <button onClick={onUpdate}>
        {product.purchased ? 'Deshacer' : 'Comprar'}
      </button>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}

export default ProductItem;

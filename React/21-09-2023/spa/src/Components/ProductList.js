import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, updateProduct, deleteProduct }) {
  return (
    <ul>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          onUpdate={() => updateProduct(index)}
          onDelete={() => deleteProduct(index)}
        />
      ))}
    </ul>
  );
}

export default ProductList;

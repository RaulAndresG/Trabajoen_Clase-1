import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (productName) => {
    // Agregar un nuevo producto a la lista
    setProducts([...products, { name: productName, purchased: false }]);
  };

  const updateProduct = (index) => {
    // Actualizar el estado "purchased" de un producto
    const updatedProducts = [...products];
    updatedProducts[index].purchased = !updatedProducts[index].purchased;
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    // Eliminar un producto de la lista
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Canasta Familiar</h1>
      <AddProduct addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;



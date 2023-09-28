import React, { useState } from 'react';

function CanastaFamiliar() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');


/* agregarProducto: En una condicion se mira que si es una cadena vacia en el espacio, si es una cadena vacia, se actualiza la copia que hicimos de la matriz, y setProductos hace que la actualizacion pase de la copia a la original productos. */

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== '') {
      setProductos([...productos, { nombre: nuevoProducto, compraRealizada: false }]);
      setNuevoProducto('');
    }
  };

  /* En esta funcion se crea una constante la cual de parametro le pasamos el index la cual va a es el operador numerico que va a empezar a contar desde el indice 0, en la constante nuevosProductos utilizamos el metodo de propagacion para crear una copia de a la matriz y modificar desde ahi antes de pasar a la principal, en nuevosProductos hacemos que se pueda modificar el estado, en este caso se utilizara true o false, llamamos a index para que cuente desde el indice0, y traemos a compraRealizada la cual esta en un booleano false, utilizamos ! para cambiar el booelano y traemos el index,.compraRealizada para que se guarde el cambio, finalmente llamamos a setProductos para que haga la actulizacion y la copia de la matriz pase a la original, entre () traemos la operacion de cambiar el booleano */

  const modificarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].compraRealizada = !nuevosProductos[index].compraRealizada;
    setProductos(nuevosProductos);
  };

  /* En esta constante eliminarProducto, y pasamos el parametro index la cual operador numerico, despues en const nuevosProductos utilizamos el metodo de propagacion y creamos una copia de la matriz productos, despues llamamos a la constante nuevos productos y utilizamos el metodo splice la cual hace que se elimine desde el indice0 y el 1 hace que solamente elimine el argumento desde donde dice el index */

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <h1>Canasta Familiar</h1>
      <input
        type="text"
        placeholder="Nuevo producto"
        /* El value es el valor que vamos a agregar y que se va a incorporar a nuevoProducto la cual esta en AgregarProducto */
        value={nuevoProducto}
        /* Es un escuchador de eventos, e es el parametro, se llama a setNuevoProducto la cual es el campo de entrada de algun elemento, se llama el parametro, despues el escuchador de eventos y finalmente el valor agregado */
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      {/* aca cuando el evento haga click, se llame la funcion de agregarProducto, que hace que cuando en el campo de entrada haya algun valor en nuevoProducto, se agregue al momento de darle click al button */}
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {/* Hace un mapeo a la matriz la cual dice que traiga todos los productos desde el indice de ese elemento */}
        {productos.map((producto, index) => (
          /* Aqui hacemos que cada elemento creado se establezca un atributo key, con un valor unico index, Esto ayuda a React a identificar los elementos cuando se actualizan */
          <li key={index}>
            {/* Aqui hacemos que el producto que este en la matriz, tambien muestra si la compra realizada es true o false, pero aca es mostrada como si o no, el ? hace que si esta en true, muestre true y viciversa*/}
            {producto.nombre} - Compra Realizada: {producto.compraRealizada ? 'Sí' : 'No'}
            {/* Llamamos el evento y al momento de darle click se llame la funcion modificarProducto o Eliminar producto, y el index es para asociarlos y asi se pueda hacer el cambio */}
            <button onClick={() => modificarProducto(index)}>Modificar</button>
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CanastaFamiliar;

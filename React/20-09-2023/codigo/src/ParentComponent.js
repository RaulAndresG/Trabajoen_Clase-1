import React, { useState } from 'react';
import ChildComponent from './ChildComponent.js';

function ParentComponent() {
  const [valor, setValor] = useState(0);

  const handleIncrement = () =>{
    setValor(valor + 1)
  }

  return (
    <div>
      <h1>Valor del componente padre: {valor}</h1>
      <ChildComponent valor={valor} onIncrement={handleIncrement} />
    </div>
  );
}

export default ParentComponent;

import React, { useState } from 'react';

function ChildComponent(props) {
  const [valorLocal, setValorLocal] = useState(props.valor);

  return (
    <div>
      <h2>
        Valor en el componente hijo: {props.valor}
      </h2>
      <button onClick={props.onIncrement}>
        Incrementar valor del componente hijo 
      </button>
    </div>
  );
}

export default ChildComponent;




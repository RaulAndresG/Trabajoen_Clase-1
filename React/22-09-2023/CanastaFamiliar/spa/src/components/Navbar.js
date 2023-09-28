import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Canasta Familiar</Link>
        </li>
        <li>
          <Link to="/empleados">Empleados</Link>
        </li>
        <li>
          <Link to="/sedes">Sedes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

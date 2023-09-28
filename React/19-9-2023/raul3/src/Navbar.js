// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <img src="unnamed.png" alt="Logo de Dropbox" />
      <h1>Dropbox</h1>
      <div className="div1">
        <a href="#">¿Por qué Dropbox?</a>
        <a href="#">Productos</a>
        <a href="#">Soluciones</a>
        <a href="#">Precios</a>
      </div>
      <div>
        <img src="icone-du-monde-noir.png" alt="img " width="20px" height="19.8px" style={{ padding: '10px', marginTop: '4.7px' }} />
      </div>
      <div className="div2">
        <a href="#">Contacto</a>
        <a href="#">Obtener la Aplicación</a>
        <a href="#">Registrarse</a>
        <a href="#">Iniciar Sesión</a>
      </div>
      <button className="blue-button">Comenzar
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="-2 -5 19 15">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;

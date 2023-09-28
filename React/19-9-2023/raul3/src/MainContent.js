// MainContent.js
import React from 'react';

function MainContent() {
  return (
    <div className="main-content">
      <h2>Únete a los más de 700 millones</h2>
      <h2>de usuarios registrados que</h2>
      <h2>que confían en Dropbox</h2>
      <p>Fácil de utilizar, confiable, privado y seguro. No es de extrañar que Dropbox sea la elección para almacenar</p>
      <p>y compartir tus archivos más importantes.</p>

      <button className="blue-button">Encuentra tu plan!
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="-2 -5 19 15">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
    </div>
  );
}

export default MainContent;

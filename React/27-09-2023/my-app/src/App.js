import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          setTimeout(async () => {
            const response = await fetch("https://dog.ceo/api/breed/hound/images/random");
            if (response.ok) {
              const dog = await response.json();
              setImageUrl(dog.message);
              setError(null);
              setIsLoading(false);
            } else {
              setError("No hay imagen");
            }
          }, 1000);
        } catch (error) {
          setError("El API no está respondiendo");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const handleLoadImages = () => {
    setIsLoading(true);
  };

  return (
    <div className="card">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          {imageUrl && <img src={imageUrl} alt="Perro" />}
          <button onClick={handleLoadImages}>Cargar imágenes de perros</button>
        </>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import datos from '../data/datos.json';

const Item = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState();

  useEffect(() => {
    const libroEncontrado = datos.libros.find((libro) => libro.isbn === id);
    setLibro(libroEncontrado);
  }, [id]);

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='granContenedor'>
      <div className='card'>
        <div className='contenedorImagen'>
        <img src={libro.imagen} alt={libro.titulo} />
        </div>
        <h2>{libro.titulo}</h2>
        <h3>Autor: {libro.autor}</h3>
        <h3>Precio: {libro.precio}</h3>
        <h3>Editorial: {libro.editorial}</h3>
      </div>
      <div>
        <h2>Sinopsis:{libro.descripcion}</h2>
      </div>
    </div>
  );
};

export default Item;

// Está pagina va a mejorar, pero necesitaba terminarla para entregar


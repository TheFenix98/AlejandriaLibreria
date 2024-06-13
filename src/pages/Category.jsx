import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import datos from '../data/datos.json';
import { Link } from 'react-router-dom';

const Category = () => {
  const { categoria } = useParams();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const categoriaProcesada = categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const librosFiltrados = datos.libros.filter(libro => libro.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === categoriaProcesada);

// ESTE MENSAJE ES PARA QUIEN ESTE CORRIGIENDO: Tardé un monton en darme cuenta que eran las mayusculas y acentos lo que no me dejaba filtrar
//pero me di cuenta al final. LA CONVERSION LA HICE CON IA no me dio la cabeza para tanto

    setLibros(librosFiltrados);
  }, [categoria]);

  const formatearPrecio = (precio) => {
    if (typeof precio === "number") {
      return precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
    }
    return 'Precio: Todavía sin definir';
  };

  return (
    <div className='contenedorGeneral'>
      {libros.length > 0 ? (
        libros.map((libro) => (
          <div className='card' key={libro.isbn}>
            <div className='contendorImagen'>
              <img src={libro.imagen} alt={libro.titulo} />
            </div>
            <h2>{libro.titulo}</h2>
            <h3>{formatearPrecio(libro.precio)}</h3>
            <Link to={`/item/${libro.isbn}`} className="btn btn-dark">Ir a detalle</Link>
          </div>
        ))
      ) : (
        <p>No se encontraron libros en esta categoría.</p>
      )}
    </div>
  );
}

export default Category;



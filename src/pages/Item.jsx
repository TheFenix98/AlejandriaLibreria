import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Item = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);
    
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setLibro({ id: snapshot.id, ...snapshot.data() });
      }
    }).catch((error) => {
      console.error("Error al obtener el producto:", error);
    });
  }, [id]);

  if (!libro) {
    return <div>Cargando...</div>;
  }

  const formatearPrecio = (precio) => {
    if (typeof precio === "number") {
      return precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
    }
    return 'Precio: Todavía sin definir';
  };

  return (
    <div className='contenedorGeneral'>
      <div className='card'>
        <div className='contenedorImagen'>
          <img src={libro.imagen} alt={libro.titulo} />
        </div>
        <h2>{libro.titulo}</h2>
        <h3>Autor: {libro.autor}</h3>
        <h3>Precio: {formatearPrecio(libro.precio)}</h3>
        <h3>Editorial: {libro.editorial}</h3>
        <button>Agregar al carrito</button>
      </div>
      <table className='tablaDetalles'>
        <tbody>
          <tr>
            <td>Sinopsis</td>
            <td>{libro.descripcion}</td>
          </tr>
          <tr>
            <td>Tapa</td>
            <td>{libro.tapa}</td>
          </tr>
          <tr>
            <td>Genero</td>
            <td>{libro.categoria}</td>
          </tr>
          <tr>
            <td>Edad Recomendada </td>
            <td>{libro.rated}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Item;




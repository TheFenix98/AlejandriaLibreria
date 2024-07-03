import React, { useState, useEffect } from 'react';
import "./ItemListContainer.css";
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => { 
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    // Obtener datos de Firestore
    getDocs(productsCollection)
      .then((snapshot) => {
        setLibros(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error("Error al obtener productos de Firestore: ", error);
      });
  }, []);

  const formatearPrecio = (precio) => {
    if (typeof precio === "number") {
      return precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
    }
    return 'Precio: Todavía sin definir';
  };

  return (
    <div className='contenedorGeneral'>
      {libros.length > 0 &&
        libros.map((libro) => (
          <div className='card' key={libro.id}>
            <div className='contendorImagen'>
              <img src={libro.imagen} alt={libro.titulo} />
            </div>
            <h2>{libro.titulo}</h2>
            <h3>{formatearPrecio(libro.precio)}</h3>
            <Link to={`/item/${libro.id}`} className="btn btn-dark">Ir a detalle</Link>
          </div>
        ))
      }
    </div>
  );
};

export default ItemListContainer;

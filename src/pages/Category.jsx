import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const Category = () => {
  const { categoria } = useParams();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection).then((snapshot) => {
      const librosFiltrados = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter(libro => {
        const categoriaProcesada = categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return libro.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === categoriaProcesada;
      });

      setLibros(librosFiltrados);
    }).catch((error) => {
      console.error("Error al obtener productos de Firestore: ", error);
    });
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
          <div className='card' key={libro.id}>
            <div className='contendorImagen'>
              <img src={libro.imagen} alt={libro.titulo} />
            </div>
            <h2>{libro.titulo}</h2>
            <h3>{formatearPrecio(libro.precio)}</h3>
            <Link to={`/item/${libro.id}`} className="btn btn-dark">Ir a detalle</Link>
          </div>
        ))
      ) : (
        <p>No se encontraron libros en esta categoría.</p>
      )}
    </div>
  );
};

export default Category;



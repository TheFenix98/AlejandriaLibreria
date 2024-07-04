import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

const Item = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext(CartContext);

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

  const incrementarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const decrementarCantidad = () => {
    setCantidad(prevCantidad => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

  const handleAgregarAlCarrito = () => {
    if (cantidad > 0) {
      addToCart(libro, cantidad);
      setCantidad(0);  // Opcional: Reiniciar la cantidad a 0 después de agregar al carrito
    }
  };

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
        <div className='botonesCantidad'>
          <button className='botonCantidad' onClick={decrementarCantidad}>-</button>
          <span>{cantidad}</span>
          <button className='botonCantidad' onClick={incrementarCantidad}>+</button>
        </div>
        <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
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





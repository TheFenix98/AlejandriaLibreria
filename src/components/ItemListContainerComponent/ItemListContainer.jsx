import React, { useState, useEffect } from 'react'
import datos from "../../data/datos.json"
import "./ItemListContainer.css"
import { Link } from 'react-router-dom'


const ItemListContainer = () => {
    const [libros, setLibros] = useState([])
    const pedirLibros= () => {
      return new Promise ((resolve, reject) =>{
        resolve(datos)
        
      })
    } 

    useEffect(() => {
      pedirLibros()
      .then((res) =>{ 
        setLibros(res.libros)

      })
    }, [])

    const formatearPrecio = (precio) => {
    if (typeof precio === "number") {
          return precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
      }
      return 'Precio:Todavia sin definir';
  };
    

    
  
  return (
    <div className='contenedorGeneral'>
      {
        libros.length>0 &&

        libros.map((libro) => {
          return( 
            <div className='card' key={libro.isbn}>
              <div className='contendorImagen'>
                <img src={libro.imagen} alt={libro.titulo} />
              </div>
              <h2>{libro.titulo}</h2>
              <h3> {formatearPrecio(libro.precio)}</h3>
              <Link to={`/item/${libro.isbn}`} className="btn btn-dark">Ir a detalle</Link>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default ItemListContainer
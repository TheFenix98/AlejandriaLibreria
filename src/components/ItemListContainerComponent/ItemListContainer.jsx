import React, { useState, useEffect } from 'react'
import datos from "../../data/datos.json"
import "./ItemListContainer.css"


const ItemListContainer = () => {
    const [libros, setLibros] = useState([])
    console.log(datos)

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
      return '';
  };
    

    
  
  return (
    <div className='contendorGenereal'>
      {
        libros.length>0 &&

        libros.map((libro) => {
          return( 
            <div className='card' key={libro.isbn}>
              <div className='contendorImagen'>
                <img src={libro.imagen} alt={libro.titulo} />
              </div>
              <h2>{libro.titulo}</h2>
              <h3>Autor: {libro.autor}</h3>
              {libro.precio && <h3>Precio: {formatearPrecio(libro.precio)}</h3>}
              
            </div>
          )
        })
      }
      
    </div>
  )
}

export default ItemListContainer
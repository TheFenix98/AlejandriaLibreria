import React from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } = React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const calcularSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <img className="imgCarrito" src={item.imagen} alt="" />
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
                <p>Precio unitario: ${item.precio}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${item.precio * item.quantity}</p>
                <button className="botonCantidad" onClick={() => handleRemoveOne(item)}>-</button>
                <button className="botonEliminar" onClick={() => handleDeleteItem(item)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <div
              style={{ margin: "10px", padding: "10px", textAlign: "right" }}
            >
              <h2>Subtotal: ${calcularSubtotal()}</h2>
            </div>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;

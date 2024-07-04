import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetComponent = () => {
  const { cart } = React.useContext(CartContext);

  const customStyles = {
    color: "red",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/cart">
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={{color: "white"}}>{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidgetComponent;
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
    const custumStyles={
        color:"red",
        marginRight: "0.5rem"
    };
    
  return (
    <div>
        <FontAwesomeIcon  icon={faCartPlus} style={custumStyles} />
        <span style={custumStyles}>0</span>
    </div>
  )
}

export default CartWidgetComponent
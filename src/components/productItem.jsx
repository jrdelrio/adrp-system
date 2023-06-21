import React from "react";
import { useState } from "react";

import "../styles/productItem.css";
import tortaIcon from "../img/cake-candles-solid.svg";
import dulceIcon from "../img/candy-cane-solid.svg";
import postreIcon from "../img/ice-cream-solid.svg";

export const ProductItem = (props) => {

    let icon = null;
    let cardColorHeader = null;
    let cardColorBody = null;
    const [disponible, setDisponible] = useState(props.product.disponible);

    const type = props.product.type;

    if (type === "torta") {
        icon = tortaIcon
    } else if (
        type === "postre") {
            icon = postreIcon
    } else if (
        type === "dulce") {
            icon = dulceIcon
        }

  return (
    
    <div className="card card-div">
        <div className="card-header">
            <img src={icon} className="type-icon"/>
            <h3 className="type-card-title">{props.product.name}</h3>
        </div>
        <div className="card-body">
            <h5 className="card-title">Precio: ${props.product.price}.000</h5>
            <h5 className="card-title">Ventas: {props.product.sells}</h5> 
            <div className="form-check form-switch">
                {disponible ? <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onChange={() => setDisponible(false)}/> : <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => setDisponible(true)}/>}
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{disponible ? "Disponible" : "No Disponible"}</label>
            </div>
            <p className="card-text">Alguna información adicional. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia dolore ipsa possimus odio voluptatibus deleniti repellat, dolorem excepturi consequuntur amet maiores omnis tenetur cupiditate accusantium. Dolorem illum mollitia voluptas.</p>
        </div>
    </div>
  );
};
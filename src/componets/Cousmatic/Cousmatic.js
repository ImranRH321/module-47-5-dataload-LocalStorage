import React from "react";
import { getProducts } from "../../utlities/calcute";
import { addDb, removeFromDb } from "../../utlities/fakeDb";
import "./Coumatic.css";

const Cousmatic = props => {
  const { name, price, id } = props.cousmetic;
  
  // set localStorage 
  const addToCart = id => {
     addDb(id) 

  }
  
  // remove localStorage item 
  const removeFromCart = id => {
    removeFromDb(id)
  }
  

  return (
    <div className="product">
      <div>
        <p>{id}</p>
        <h2>buy this {name}</h2>
        <h2>only for this: {price}</h2>
        <button onClick={() => addToCart(id)}>Add to cart</button>
        <button onClick={() => removeFromCart(id)}>Remove cart</button>
      </div>
    </div>
  );
};

export default Cousmatic;

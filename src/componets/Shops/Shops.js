import React from "react";
import { add,  multify } from "../../utlities/calcute";


const Shops = () => {
  const first = 100;
  const second = 500;
  const result = add(first, second);
  const multifyResult = multify(first, second);


  return (
    <div>
      <h1>This is Shops Area ............</h1>
      <input type="text"  id="input" placeholder="this is input text here !"/>
      <h1>This is Shops Area ............</h1>
      <h3>Reslt: {result}</h3>
      <h3>Reslt: {multifyResult}</h3>
    </div>
  );
};

export default Shops;

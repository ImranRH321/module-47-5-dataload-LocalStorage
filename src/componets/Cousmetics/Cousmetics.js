import React, { useEffect, useState } from "react";
import { TotalProducts } from "../../utlities/calcute";
import Cousmatic from "../Cousmatic/Cousmatic";

const Cousmetics = () => {
  const [cousmetics, setCousmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCousmetics(data));
  }, []);

  const getTotalPrice = TotalProducts(cousmetics);

  return (
    <div>
      <h4>Welcome to via Cousmetices Store............</h4>
      <h1>price: {getTotalPrice}</h1>
      {cousmetics.map(cousmetic => (
        <Cousmatic key={cousmetic.id} cousmetic={cousmetic}></Cousmatic>
      ))}
    </div>
  );
};

export default Cousmetics;

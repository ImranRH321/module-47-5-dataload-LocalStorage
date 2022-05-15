const addDb = id => {
  let shoppingCart;
  const storCart = localStorage.getItem("shoping-cart");
  if (storCart) {
    shoppingCart = JSON.parse(storCart);
  } else {
    shoppingCart = {};
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = id => {
     const storeCart = localStorage.getItem('shoping-cart') 
      if(storeCart){
        const shoppingCart = JSON.parse(storeCart) 
        if(id in shoppingCart){
          delete shoppingCart[id] 
          localStorage.setItem('shoping-cart',JSON.stringify(shoppingCart))
        }
      }
    }


// all delete 
const remvoeShoppingCart = () => {
  localStorage.removeItem('shoping-cart')
} 
/*  */

export { addDb, removeFromDb , remvoeShoppingCart};

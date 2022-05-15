import { prettyDOM } from "@testing-library/react";

const add = (first, second) => {
  return first + second;
};

const multify = (first, second) => {
  return first * second;
};

const about = (one, two) => {
  return one / two;
};

// // reduse
// const number = [5, 6, 7, 8, 9]; 
// const sumRedueser = ((previous, curren )=>  previous + curren)
// const total = number.reduce(sumRedueser, 0)


// const getProducts = [
//     {id: 1, name:'tamim', price: 100},
//     {id: 1, name:'tamim', price: 100},
//     {id: 1, name:'tamim', price: 100},
//     {id: 1, name:'tamim', price: 100},
// ]
// const re = ( (p, c) => p + c.price)
// const totals = getProducts.reduce(re, 0)
// // ak line 
// const sum =  getProducts.reduce((previous, current) => previous + current.price, 0)
// console.log(sum);


// original code product price here total sum 
const getProducts = products => {
    const number = products.reduce((previous, current) => previous + current.price, 0)
    return number
 }
 
 



export { add, multify, about, getProducts as TotalProducts };

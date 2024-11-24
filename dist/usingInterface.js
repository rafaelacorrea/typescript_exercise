"use strict";
/*
O que está errado?

function addToCart(item: {id: number, title: string, variantId: number}) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
*/
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: 'shoes' });

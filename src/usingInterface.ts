/*
O que está errado?

function addToCart(item: {id: number, title: string, variantId: number}) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
*/

//R: Podemos usar interface para montar as propriedades genéricas do objeto
interface CartItem {
    id: number;
    title: string;
    variantId?: number;// a notação ? serve para sinalizar que é uma propriedade opcional
  }

function addToCart(item: CartItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

addToCart({id: 1, title: 'shoes'});
"use strict";
/*
O que está errado?

class MC {
    greet(event = 'party') {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));
*/
//R: Devemos definir o tipo do parâmetro e do método de uma classe
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));

"use strict";
/*
O que está errado?

const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);
*/
//R: Define o tipo do array como number
const sequence = Array.from(Array(10).keys());
//R: Define o tipo do array como string
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
//R: Define o tipo do array como number ou string
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
//R: Define o tipo do array como number ou string, porém inclui mais um colchete para quando um dos arrays tiver apenas um tipo
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);

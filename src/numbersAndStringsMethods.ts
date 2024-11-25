/*
O que está errado?

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

capitalize = function(x: number, y: number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));
*/

//R:Vemos que o problema é a inversão de tipos.

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function(x: number, y: number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));
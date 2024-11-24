/*
O que está errado?
let pie
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)
*/

//R: No TypeScript devemos declarar o tipo da variável para evitar erros de input no futuro.
let pie: string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)
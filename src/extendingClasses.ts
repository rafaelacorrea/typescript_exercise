/*
O que está errado?

// Day 7 - Exercise 2

class Animal {
    constructor(name) {}
    move(meters) {
      console.log(`${this.name} moved ${meters}m.`)
    }
  }

  class Snake {
    move(meters) {
      console.log('Slithering...')
    }
  }

  class Pony {
    move(meters) {
      console.log('Galloping...')
    }
  }


  const sammy = new Snake("Sammy the Snake")
  sammy.move()

  const pokey = new Pony("Pokey the Pony")
  pokey.move(34)
*/

/*R: É necessário sempre tipar as variáveis e parâmetros. Após isso devemos sinalizar 
qual classe é uma estenderá da superclasse e nas classes filhas devemos adicionar o
super para mostrar que será usado o metodo da superclasse.*/

class Animal {
    constructor(public name: string ) {}
    move(meters: number) {
      console.log(`${this.name} moved ${meters}m.`)
    }
  }

  class Snake extends Animal{
    move(meters: number = 5) {
      console.log('Slithering...')
      super.move(meters)
    }
  }

  class Pony extends Animal{
    move(meters: number) {
      console.log('Galloping...')
      super.move(meters)
    }
  }


  const sammy = new Snake("Sammy the Snake")
  sammy.move()

  const pokey = new Pony("Pokey the Pony")
  pokey.move(34)
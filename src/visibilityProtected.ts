/*
O que está errado?

class Furniture {
    constructor(manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(`This is a desk made by ${this.manufacturer}`)
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(`This is a chair made by ${this.manufacturer}`)
    }
  }

  const desk = new Desk()
  desk.kind()
  // desk.manufacturer // Deve retornar um erro

  const chair = new Chair()
  chair.kind()
  // chair.manufacturer // Deve retornar um erro

*/ 

/*R: Usamos a visibilidade protected para que as propriedades da superclasse Furniture
seja vista apenas pelas subclasses.*/
class Furniture {
    constructor(protected manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log(`This is a desk made by ${this.manufacturer}`)
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(`This is a chair made by ${this.manufacturer}`)
    }
  }

  const desk = new Desk()
  desk.kind()
  // desk.manufacturer // Deve retornar um erro

  const chair = new Chair()
  chair.kind()
  // chair.manufacturer // Deve retornar um erro
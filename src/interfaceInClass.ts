/*
O que está errado?

class Person {
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);
*/

//R: Podemos usar interface para ser usada em uma classe através do implements

interface PersonProperty {
    name: string;
    age: number;
}
class Person implements PersonProperty{
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);
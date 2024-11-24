/*
O que está errado?

class Employee {
    title: string;
    salary: number;
    constructor(title: string, salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
*/

//R: Podemos reduzir o números de linhas de código, apenas incializando a propriedades dentro do constructor
class Employee {
    //Usaremos public para iniciar as propriedades
    constructor(public title: string, public salary: number) {

    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
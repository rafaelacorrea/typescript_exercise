/*
O que está errado?

function layEggs(quantity, color) {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
  }

  layEggs();
*/

//R: Adicionar sempre os tipos dos parâmetros para não haver erros no futuro!!
function layEggs(quantity: number, color: string): void {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
  }

  layEggs(7, 'Purple');
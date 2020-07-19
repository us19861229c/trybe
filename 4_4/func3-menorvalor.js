// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let array = [2, 4, 6, 7, 10, 0, -3]

function menorIndice(array){
  let indiceArray = 0;
  let menorValor;
  for(let indice = 0; indice < array.length; indice += 1){
    if(indice == 0){
      menorValor = array[indice];
      indiceArray = indice
    } else {
      if (array[indice] < menorValor){
        menorValor = array[indice]
        indiceArray = indice
      }
    }
  }
  console.log(indiceArray)
}

menorIndice(array)
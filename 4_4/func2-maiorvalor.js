// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let array =  [2, 3, 6, 7, 10, 1];

function maiorIndice(array){
  let maiorNumero = 0;
  let indiceArray = 0;
  for(let indice = 0; indice < array.length; indice += 1){
    if(array[indice] > maiorNumero) {
      maiorNumero = array[indice];
      indiceArray = indice
    }
  }
  console.log(indiceArray)
}

maiorIndice(array)
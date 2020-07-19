// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let arrayNome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome(array){
  let caracteresNome;
  let nomePessoa = " ";
  for(let indice = 0; indice < array.length; indice += 1){
    if (indice === 0){
      caracteresNome = array[indice].length
    } else {
      if(caracteresNome < array[indice].length) {
        caracteresNome = array[indice].length
        nomePessoa = array[indice]
      }
    }
  }
  return nomePessoa
}

console.log(maiorNome(arrayNome))
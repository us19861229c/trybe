// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0

for(let i = 0; i < numbers.length; i = i + 1){
  if(numbers[i] > maiorValor) {
    maiorValor = numbers[i]
  }
}
console.log(maiorValor)

//Baby steps
//1- Adiciona o array;
//2- Cria variável com valor 0
//3- Cria o loop que percorre o array 
//4- Cria um IF com a condição do item em determinada posição ter valor maior que a variável
//5- Caso a condição seja contemplada, atribui esse novo valor à variável.
//6- Imprime o valor da variável  
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0;
let media = 0;

for( let i = 0; i < numbers.length; i = i + 1) {
  somaTodos += numbers[i]
} 
media = somaTodos / numbers.length
console.log(media)

//Baby Steps!
// 1- Adiciona o array;
// 2- Cria variável de soma com valor 0;
// 3- Cria variável de média com valor 0;
// 4- Cria o loop que percorre o array ;
// 5- Incrementa a variável de soma com o valor correspondente a cada loop;
// 6- Atribui à variável media a divisao da variável soma pelo numero de itens do array;
// 7- Imprime a variável media.
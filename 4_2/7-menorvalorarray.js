// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor; 

for(let i = 0; i < numbers.length; i = i + 1){
  if(i == 0) {
    menorValor = numbers[i]
  } else if (numbers[i] < menorValor){
    menorValor = numbers[i]
  }
}
console.log(menorValor)

//Baby Steps
// 1- Adiciona o array;
// 2- Declara a variável menorValor;
// 3- Cria o loop que percorre o array;
// 4- Cria um IF com a condição de ser o primeiro valor percorrido no array;
// 5- Atribui esse valor à variavel menorValor
// 6- Se a condição não for contemplada, uma nova condição é apresentadada
// 7- Cria a condiçao que se o próximo valor percorrido no array, for menores que o valor da variável menorValor, esse valor será atribuído à variável.
// 8 -Imprime a variável
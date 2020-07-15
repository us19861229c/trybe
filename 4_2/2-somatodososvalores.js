// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0

for(let i = 0; i < numbers.length; i = i + 1) {
  somaTodos += numbers[i]
}
console.log(somaTodos)

//Baby Steps!
// 1- Adiciona o Array;
// 2- Cria variável de soma com valor 0;
// 3- Cria o loop que percorre o array ;
// 4- Incrementa a variável de soma com o valor correspondente a cada loop;
// 5- Imprime a variável.  
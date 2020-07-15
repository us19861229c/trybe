// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0;
let media = 0

for( let i = 0 ; i < numbers.length; i = i + 1) {
  somaTodos += numbers[i]
}
media = somaTodos / numbers.length
if(media > 20){
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}

//Baby Steps!
// 1- Adiciona o array;
// 2- Cria variável de soma com valor 0;
// 3- Cria variável de média com valor 0;
// 4- Cria o loop que percorre o array ;
// 5- Incrementa a variável de soma com o valor correspondente a cada loop;
// 6- Atribui à variável media a divisao da variável soma pelo numero de itens do array;
// 7- Cria um IF com a condição da variável media ser maior que 20
// 8- Caso a variável média obedeça a condição, imprime a mensagem "valor maior que 20"
// 9- Caso a variável média não obedeça a condição, imprime a mensagem "valor menor ou igual a 20"
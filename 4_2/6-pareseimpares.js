// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0

for(let i = 0; i < numbers.length; i = i + 1){
  if(numbers[i] % 2 != 0) {
    impares++
  }
}
if(impares == 0){
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log("são", impares, "numeros impares")
}

//Baby steps
//1- Adciona o array;
//2- Cria variável com valor 0;
//3- Cria o loop que percorre o array;
//4- Cria um IF com a condição da variável ser impar;
//5- Caso a condição seja contemplada, incrementa o valor da variável. 
//6- Cria um IF com a condição da variável ser 0 a zero;
//7- Caso a condição seja contemplada, imprime a mensagem: "nenhum valor ímpar encontrado"
//8- Caso a condição não seja contemplada, imprime o valor da variável.
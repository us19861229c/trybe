// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 25;
let c = 33;
let maiorEntre3 = 0;

if( b > a && b > c){
  maiorEntre3 = b
} else if ( a > b  && a > c){
  maiorEntre3 = a
} else {
  maiorEntre3 = c
}

console.log(maiorEntre3)
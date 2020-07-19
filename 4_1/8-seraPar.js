// Escreva um programa que defina três números em variáveis no seu começo e **retorne true se uma das três for par**. Caso contrário, ele retorna false.

// Bonus: use somente um if.

let n1 = 5;
let n2 = 6;
let n3 = 7;

let seraPar = true

seraPar = (n1%2 == 0 || n2%2 == 0 || n3%2 == 0)? true : false
console.log(seraPar)
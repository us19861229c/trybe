// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop -> diagonals

// Peças de Xadrez = Peão, Torre, Cavalo, Bispo, Rainha e Rei;

let pecaDeXadrez = prompt("Digite uma peça de xadrez", "Peão")

console.log("você digitou ", pecaDeXadrez)
switch(pecaDeXadrez.toLowerCase()) {
  case "peão":
    console.log(pecaDeXadrez , " -> frente");
    break
  case "torre":
    console.log(pecaDeXadrez, " -> frente e lados");
    break
  case "cavalo":
    console.log(pecaDeXadrez, " -> em L");
    break
  case "bispo":
    console.log(pecaDeXadrez, " -> diagonal");
    break
  case "rainha":
    console.log(pecaDeXadrez, " -> move para onde ela quiser, meu bem");
    break
  case "rei":
    console.log(pecaDeXadrez, " -> move num quadradinho");
    break
  default:
    console.log("Desculpe, mas ", pecaDeXadrez, " não é uma peça válida");
}
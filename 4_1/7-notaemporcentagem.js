// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaAluno = prompt("Digite sua nota de 0 a 90")


if(notaAluno >= 90) {
  console.log("A")
} else if (notaAluno >= 80){
  console.log("B")
} else if (notaAluno >= 70){
  console.log("C")
} else if (notaAluno >= 60){
  console.log("D")
} else if (notaAluno >= 50){
  console.log("E")
} else {
  console.log("F")
}
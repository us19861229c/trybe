// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

function palindromo(palavra){
  palavra = palavra.toLowerCase()
  let palavraInvertida = palavra.toLowerCase().split('').reverse().join('')
  console.log(palavraInvertida === palavra)
}

palindromo("Hannah")
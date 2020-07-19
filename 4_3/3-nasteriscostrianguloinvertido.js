// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo espelhado.

let n = 5;

for ( let i = 1; i <= n; i += 1) {
  let vazio = " "
  let asterisco = "*"
  console.log(vazio.repeat(n-i), asterisco.repeat(i))
}
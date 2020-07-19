// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let n = 5;

for (let i = 1; i <= n; i += 2){
  console.log(" ".repeat((n-i)/2), "*".repeat(i), " ".repeat((n-i)/2))
}
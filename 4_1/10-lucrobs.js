// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custo = 100;
let custoProduto = custo - (custo * 20/100);
let valorDeVenda = 500;
let lucroProduto = 1000 * (valorDeVenda - custoProduto);

if( custoProduto < 0 && valorDeVenda < 0 ) {
  console.log("Não é possível realizar essa operação")
}
console.log(lucroProduto)



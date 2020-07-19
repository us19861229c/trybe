// 3 - Faça um for/in que mostre todas as chaves do objeto.
// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log("3 - ")
for(chaves in info){
  console.log(chaves)
}
console.log("4 - ")
for(chaves in info){
  console.log(info[chaves])
}
console.log(`Trabalhando com condicionais!`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 20;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem!")
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de Idade e não vender");
}

console.log("\nEmbarque: \n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar")
}


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade!")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de Idade e não vender");
// }


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
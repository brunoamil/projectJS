//COMANDO PARA COMENTAR/DESCOMENTAR Ctrl+K+C e Ctrl+K+U

console.log(`Trabalhando com condicionais`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//criação de listas- Array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item 
} else if (estaAcompanhada) {
    console.log("Comprador esta acompanhado");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log(listaDeDestinos);

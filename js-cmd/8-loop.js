const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const destino = "Curitiba";
let contador = 0;

while(contador < 3){
    if(listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log('Destino não existe');
    }

    contador += 1;
}
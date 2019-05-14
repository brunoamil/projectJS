var titulo = document.querySelector(".titulo");
titulo.textContent = "Bruno Nutricionista";

// calculando o IMC

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
    console.log("Peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "peso invalido!";
}

if(altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida");
    alturaEhValida = false;
    tdImc.textContent = "altura invalida!";

}

if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




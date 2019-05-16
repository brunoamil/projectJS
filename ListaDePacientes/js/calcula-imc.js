var titulo = document.querySelector(".titulo");
titulo.textContent = "Bruno Nutricionista";

// calculando o IMC

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "peso invalido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    console.log("Altura invalida");
    alturaEhValida = false;
    tdImc.textContent = "altura invalida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

//validando o peso
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

//valida a altura
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
//funcao para calcular o IMC
function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

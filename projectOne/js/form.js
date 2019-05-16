// Adicionando novo paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  //pegando os dados do form
  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  //colocando dentro da tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");

  //limpando as mensagens
  ul.innerHTML = "";
  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
function obtemPacienteDoFormulario(form) {
  //criando um objeto
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };
  return paciente;
}

function montaTr(paciente) {
  //criando tr e td
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //colocando dentro o Td dentro do Tr.
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  //criando array
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome nao pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é invalido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é invalida");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura nao pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("A peso nao pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura nao pode ser em branco");
  }

  return erros;
}

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeOut");

  //usando o timeOut para aguardar uma proxima ação/transição
  setTimeout(function() {
    event.target.parentNode.remove();
  }, 500);
});

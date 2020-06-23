var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
     console.log("buscando novos pacientes.");
    var xhr = new XMLHttpRequest();
    //abrindo a requisicao
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //ouvindo para saber se foi carregado
    xhr.addEventListener("load", function(){
        var erro = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erro.classList.add("invisivel");
            //responseText para verificar a resposta
            var resposta = xhr.responseText;
            //transformando/parseador de JSON para Objetos JS.
            var pacientes = JSON.parse(resposta);

            //como vem um objeto de varios pacientes, é preciso interar paciente por paciente.
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel");
        }
       
    });
    //enviando a requisicao
    xhr.send();
});
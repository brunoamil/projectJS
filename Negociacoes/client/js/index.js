// criando um objeto e pegando dos formularios
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

//pegando o tbody
var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault();
    var tr = document.createElement("tr");

    //percorrendo o objeto para criar um td para cada.
    campos.forEach(function(campo){
        var td = document.createElement("td");
        td.textContent = campo.value;
        //colocando na tabela
        tr.appendChild(td);
    });

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    //colocando na tabela
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    //focando a data
    campos[0].focus();
});
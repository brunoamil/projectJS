//CRIANDO UMA REQUISICAO DO TIPO GET.

const listarClientes = () => {
return fetch('http://localhost:3000/negociacoes/semana')
    .then(resposta => {
        var dados =  resposta.json();
        return dados;
    })
    .then(resultado => {
        return resultado;
    })
}    

//CRIANDO UMA REQUISICAO DO TIPO POST.

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch("http://localhost.com", {
        method: 'POST',
        headers: {
           'Content-type': 'application/json'
        },
        body: json
    })
    .then( resp => {
        return resp.body
    })
}
 
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
 

// CRIANDO REQUISICAO DE DELETE
const deletaCliente = id => {
    return fetch(`http://localhost.com/clientes/cliente/${id}`, {
        method: "DELETE"
    })
}

// PEGANDO OS DADOS DA API PARA ALTERACAO

const detalhaCliente = id => {
    return fetch(`http://localhost.com/clientes/cliente/${id}`,
    {
        method: "GET"
    })
    .then(resposta => {
        return resposta.json()
    })
}
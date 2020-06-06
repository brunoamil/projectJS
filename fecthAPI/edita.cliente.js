const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf');
const inputNome = document.querySelector('[data-nome');

detalhaCliente(id).then(dados => {
    inputCPF.value = dados[0].cpf 
    inputNome.value = dados[0].nome 
})
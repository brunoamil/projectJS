class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    //pegando os valores do formulario
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }
  adiciona(event) {
    event.preventDefault();

    // convertendo a data(texto) para data
    
   

    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));
    
  }
}

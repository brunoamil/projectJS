class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    //pegando os valores do formulario
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes(model => {
      //atualizando sempre a listaNegociacoesView
      //console.log(this);
      this._negociacoesView.update(model);
    });
    this._negociacoesView = new NegociacoesView($("#negociacoesView"));

    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem);
  }
  adiciona(event) {
    event.preventDefault();
    //adicionando a negociacao
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociacao adicionada com sucesso";
    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
    //console.log(this._listaNegociacoes.negociacoes);
  }

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = "Negociacoes apagadas com sucesso";
    this._mensagemView.update(this._mensagem);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  //metodo para limpar os formularios
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}

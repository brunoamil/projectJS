class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    //pegando os valores do formulario
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    //usando o Proxy do ES6
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      "adiciona",
      "esvazia"
    );

    /*ProxyFactory.create(
      new ListaNegociacoes(),
      ["adiciona", "esvazia"],
      model => this._negociacoesView.update(model)
    ); */

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    /*ProxyFactory.create(new Mensagem(), ["texto"], model =>
      this._mensagemView.update(model)
    ); */
  }
  adiciona(event) {
    event.preventDefault();
    //adicionando a negociacao
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = "Negociacao adicionada com sucesso";
    this._limpaFormulario();
  }

  apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = "Negociacoes apagadas com sucesso";
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

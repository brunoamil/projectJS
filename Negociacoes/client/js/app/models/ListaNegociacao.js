class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  //metodo
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
    // usando api reflect para enviar o this do ListaNegociacoes para o NegociacaoController
    //Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  get negociacoes() {
    //retornando o array vazio para blindar a leitura e nao permitir inserçoes além do metodo negociacoes(ListaNegociacoes)
    return [].concat(this._negociacoes);
  }

  //apagando todas as negociacoes da lista
  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }
}

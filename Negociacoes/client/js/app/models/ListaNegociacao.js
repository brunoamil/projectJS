class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  //metodo
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    //retornando o array vazio para blindar a leitura e nao permitir inserçoes além do metodo negociacoes(ListaNegociacoes)
    return [].concat(this._negociacoes);
  }
}

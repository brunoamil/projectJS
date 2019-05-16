//criacao da classe
class Negociacao {
  //definindo os atributos da classe
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  //quando criar uma funcao dentro de classe, voce chama de METODO
  get volume() {
    return this._quantidade * this._valor;
  }

  //metodos acessadores
  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}

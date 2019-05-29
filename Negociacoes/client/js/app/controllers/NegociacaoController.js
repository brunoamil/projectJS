class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    //pegando os valores do formulario
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._ordemAtual = "";

    //usando o Proxy do ES6
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($("#negociacoesView")),
      "adiciona",
      "esvazia",
      "ordena"
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


    //consumindo o connectionfactor e negociacaoDao
    ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.listaTodos())
      .then(negociacoes => 
        negociacoes.forEach(negociacao => 
          this._listaNegociacoes.adiciona(negociacao)))
      .catch(erro =>  {
        console.log(erro);
        this._mensagem.texto = error;
      });
  }


  adiciona(event) {
    event.preventDefault();

    ConnectionFactory
      .getConnection()
      .then(connection => {
        let negociacao = this._criaNegociacao();

        new NegociacaoDao(connection)
            .adiciona(negociacao)
            .then(() => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociacao adicionada com sucesso';
                this._limpaFormulario();
            })
      })
      .catch(erro => this._mensagem.texto = erro);
  }

  //Consumindo o serviço de negociacoes
  importaNegociacoes() {
    let service = new NegociacaoService();
    //Utilizando a Promise All

    Promise.all([
      service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada()
    ])
      .then(negociacoes => {
        negociacoes
          .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
          .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        this._mensagem.texto = "Negociacoes importadas com sucesso";
      })
      .catch(error => (this._mensagem.texto = error));

    /*
    // 2 TESTE DE CONSUMIR O SERVIÇO
    //Utilizando promise para consumir o serviço
    
    service
      .obterNegociacoesDaSemana()
      .then(negociacoes => {
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao)
        );
        this._mensagem.texto = "negociacoes da semana obtidas com sucesso";
      })
      .catch(erro => (this._mensagem.texto = erro));

    service
      .obterNegociacoesDaSemanaAnterior()
      .then(negociacoes => {
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao)
        );
        this._mensagem.texto = "negociacoes da semana obtidas com sucesso";
      })
      .catch(erro => (this._mensagem.texto = erro));

    service
      .obterNegociacoesDaSemanaRetrasada()
      .then(negociacoes => {
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao)
        );
        this._mensagem.texto = "negociacoes da semana obtidas com sucesso";
      })
      .catch(erro => (this._mensagem.texto = erro));

      // 1 TESTE DE CONSUMIR O SERVIÇO 
    service.obterNegocisacoesDaSemana((erro, negociacoes) => {
      if (erro) {
        this._mensagem.texto = erro;
        return;
      }

      //caso nao caia no if err ele vai fazer isto.
      negociacoes.forEach(negociacao =>
        this._listaNegociacoes.adiciona(negociacao)
      );

      service.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => {
        if (erro) {
          this._mensagem.texto = erro;
          return;
        }
        //caso nao caia no if err ele vai fazer isto.
        negociacoes.forEach(negociacao =>
          this._listaNegociacoes.adiciona(negociacao)
        );

        service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => {
          if (erro) {
            this._mensagem.texto = erro;
            return;
          }
          //caso nao caia no if err ele vai fazer isto.
          negociacoes.forEach(negociacao =>
            this._listaNegociacoes.adiciona(negociacao)
          );
          this._mensagem.texto = "Negociacoes importadas com sucesso";
        });
      });
    }); */
  }
  apaga() {

    ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.apagaTodos())
      .then(mensagem => {
        this._mensagem.texto = mensagem;
        this._listaNegociacoes.esvazia();
      });

   
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  //metodo para limpar os formularios
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  // ordenando dados na tabela
  ordena(coluna) {
    if (this._ordemAtual == coluna) {
      this._listaNegociacoes.inverteOrdem();
    } else {
      this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
    }

    this._ordemAtual = coluna;
  }
}

class NegociacaoService {
  obterNegociacoesDaSemana(cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "negociacoes/semana");
    //configuracoes

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log("Obtendo as negociacoes do servidor");
          //convertendo com JSON.PARSE para objeto javascript
          cb(
            null,
            JSON.parse(xhr.responseText).map(
              objeto =>
                new Negociacao(
                  new Date(objeto.data),
                  objeto.quantidade,
                  objeto.valor
                )
            )
          );
        } else {
          console.log(xhr.responseText);
          cb("Nao foi possivel obter as negociacoes");
        }
      }
    };
    //sabendo os estados da requisiçao
    /*
      0: requisicao ainda nao iniciada
      1: conexao com o servidor estabelecida
      2: requisicao recebida
      3: processando requisicao
      4: requisicao concluida e resposta esta pronta
    */

    xhr.send();
  }
}

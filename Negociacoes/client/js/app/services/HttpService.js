class HttpService {
  get(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      //configuracoes

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            //convertendo com JSON.PARSE para objeto javascript
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
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
    });
  }

  // trabalhando com POST

  post(url, dado) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }
      };
      xhr.send(JSON.stringify(dado));
    });
  }
}

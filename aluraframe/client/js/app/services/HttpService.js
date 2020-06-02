class HttpService {
    get(url){
        return new Promise((resolve, reject) => {
             //requisitando com AJAX/Limpo
            let xhr = new XMLHttpRequest();
            //abrindo conexao
            xhr.open("GET", url);
            //configurando ante de enviar cada estado(status)
            //onreadystate verifica os estados
            /* ESTADOS DA REQUISICAO 
            0: Requisicao ainda nao iniciada
            1: conexao com o servidor estabelecida
            2: requisicao recebida
            3: processando requisicao
            4: requisicao concluida e a resposta esta pronta
            */
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));                           
                    } else {
                        console.log(xhr.responseText); 
                        reject(xhr.responseText); 
                    }
                }
            };
            xhr.send();
        });
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringify para converter objeto em uma string no formato JSON.
        });

    }
}
class NegociacaoService {
    constructor(){
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana() {

         return new Promise((resolve, reject) => {
             this._http
             .get("negociacoes/semana")
             .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
             })
             .catch(erro =>  {
                 reject(erro);
                 reject('Nao foi possivel obter as negociacoes da semana');
             })
       });
    }

    /*EXEMPLO DE REQUISICAO SEM PROMISE 
    obterNegociacoesDaSemanaAnterior(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "negociacoes/anterior");
      
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log("Obtendo as negociacoes do servidor");
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                       
                } else {
                    console.log(xhr.responseText); 
                    cb('Nao foi possivel obter as negociacoes anterior', null); 
                }
            }
        };
        xhr.send();
   }
*/
        obterNegociacoesDaSemanaAnterior() {

            return new Promise((resolve, reject) => {
                this._http
                .get("negociacoes/anterior")
                .then(negociacoes => {
                   resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro =>  {
                    reject(erro);
                    reject('Nao foi possivel obter as negociacoes da semana anterior');
                })
          });
        }

        obterNegociacoesDaSemanaRetrasada() {

            return new Promise((resolve, reject) => {
                this._http
                .get("negociacoes/retrasada")
                .then(negociacoes => {
                   resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro =>  {
                    reject(erro);
                    reject('Nao foi possivel obter as negociacoes da semana retrasada');
                })
          });
        }
    }

var ConnectionFactory = (function () {

    const stores = ['negociacoes'];
    const version = 4;
    const dbName = 'aluraframe';
    var connection = null; 

    var close = null;

    return class ConnectionFactory {
        constructor() {
            throw new Error('Não é possível criar instancias de connectionFactory');
        }

        static getConnection(){
            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if(!connection) {
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function() {
                            throw new Error('Voce nao pode fechar diretamente a conexao');
                        };
                    } 
                    resolve(connection);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };

            });
        }

        static _createStores(connection){
            stores.forEach(store => {
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store);
                }
                connection.createObjectStore(store, {autoIncrement: true});
            });
        }
     //fechando conexao
     static closeConnection(){
         if(connection){
             close();
             connection = null;
         }
     }

    }
})();   //funcao auto invocada


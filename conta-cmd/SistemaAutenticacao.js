/*
    - SER AUTENTICAVEL  - ter a propriedade senha

*/
export class SistemaAutenticacao{
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}
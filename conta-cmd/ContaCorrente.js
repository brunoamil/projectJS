export class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;  //é um dado privado, nao deve ser acessado.


    //metodo com definicao do escopo
    sacar(valor) {
     if(this. _saldo >= valor) {
            this. _saldo -= valor;
            return valor;
        }
    }
    //metodo depositar
    depositar(valor){
        if(valor <= 0) {
            return;
            
        }
        
        this. _saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

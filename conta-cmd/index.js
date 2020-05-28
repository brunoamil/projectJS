import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 =  new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 123456;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 123456;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 101;
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;

ContaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(ContaCorrenteRicardo);

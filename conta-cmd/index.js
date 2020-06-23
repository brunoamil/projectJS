import {Cliente} from './Cliente.js';
import {Gerente} from './Funcionarios/Gerente.js';
import {Diretor} from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, 932320);
diretor.cadastraSenha("123");
const gerente = new Gerente("Bruno", 5000, 932320);
gerente.cadastraSenha("123456");

const cliente = new Cliente("Lais", 394030, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { Cliente } from "./Cliente";

const C1 = new Cliente("Kauan Fossa", 1, "Rua instituto, Bairro Federal", 992680293, 10000);
const C2 = new Cliente("Alexia", 2, "Rua Pedro, bairro Progresso", 992034913, 700)

const CC1 = new ContaCorrente(800, 100);
const CC2 = new ContaPoupanca(100, 30);

if(C1.salario >= 500){
    CC1.deposito(20);
    CC1.saque(10);
    CC1.transferencia(100, CC2);
    CC1.verifivarSaldo();
    CC1.chequeEspecial();
    
}else{
    CC2.deposito(30);
    CC2.saque(40);
    CC2.transferencia(90,CC1);
    CC2.calcularTaxa();
    CC2.verifivarSaldo();
}
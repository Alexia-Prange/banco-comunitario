import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { Cliente } from "./Cliente";

const C = new Cliente("Kauan Fossa", 1, "Rua instituto, Bairro Federal", 992680293, 10000);

if(C.salario >= 500){
    C.exibir();
    const CC = new ContaCorrente(800);
    CC.deposito(20);
    CC.saque(10);
    CC.transferencia(100);
    
}else{
    C.exibir();
    const CP = new ContaPoupanca(100, 30);
    CP.deposito(30);
    CP.saque(40);
    CP.transferencia(90);
    CP.calcularTaxa();
}
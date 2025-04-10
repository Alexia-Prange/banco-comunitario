import { IConta } from "./IConta";

export class ContaCorrente implements IConta{
    saldo: number;

    constructor(saldo: number){
        this.saldo = saldo;
    }
    

    deposito(valor: number): void {
        this.saldo = valor + this.saldo;
        console.log("Depósito feito")
    }

    saque(valor : number): void {
        this.saldo = this.saldo - valor;
        console.log("Saque feito")
    }

    transferencia(valor : number): void {
        this.saldo = this.saldo - valor;
        console.log("Trasferência concluida")
    }

    verifivarSaldo(): void {
        console.log("Saldo: " + this.saldo)
    }

}
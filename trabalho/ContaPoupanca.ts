import { IConta } from "./IConta";

export class ContaPoupanca implements IConta{
    saldo: number;
    taxajuros: number;

    constructor(saldo: number, taxaJuros: number){
        this.saldo = saldo;
        this.taxajuros = taxaJuros;
    }

    transferencia(valor: number, outroCliente: IConta): void {
         if(valor > 0){
            if(this.saldo > valor){
                this.saldo = this.saldo - valor;
                outroCliente.saldo += this.saldo;
                console.log("Trasferência concluida")
            }else{
                console.log("Erro")
            }
        }

    }

    deposito(valor: number): void {
        this.saldo = valor + this.saldo;
        console.log("Depósito feito")
    }

    saque(valor : number): void {
        this.saldo = this.saldo - valor;
        console.log("Saque feito")
    }

    

    verifivarSaldo(): void {
        console.log("Saldo: " + this.saldo)
    }

    calcularTaxa(): void {
        this.taxajuros = this.saldo * 0.01;
        console.log("Jurose: " + this.taxajuros)
    }

}
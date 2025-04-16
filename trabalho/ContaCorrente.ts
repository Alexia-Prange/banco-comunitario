import { IConta } from "./IConta";

export class ContaCorrente implements IConta{
    saldo: number;
    limite: number

    constructor(saldo: number, limite: number){
        this.saldo = saldo;
        this.limite = limite;
    }
    

    deposito(valor: number): void {
        this.saldo = valor + this.saldo;
        console.log("Depósito feito")
    }

    saque(valor : number): void {
        this.saldo = this.saldo - valor;
        console.log("Saque feito")
    }

    transferencia(valor : number, outroCliente: IConta): void {
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

    verifivarSaldo(): void {
        console.log("Saldo: " + this.saldo)
    }

    chequeEspecial(): void{
        if(this.saldo == 0){
            this.saldo = this.saldo + this.limite;
        }
        
    }

}
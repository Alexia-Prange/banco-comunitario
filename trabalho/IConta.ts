export interface IConta{
    saldo: number;
    deposito(valor:number): void;
    saque(valor: number): void;
    transferencia(valor: number, outroCliente: IConta): void;
    verifivarSaldo(): void;
}

export interface IConta{
    saldo: number;
    deposito(): void;
    saque(): void;
    transferencia(): void;
    verifivarSaldo(): void;
}

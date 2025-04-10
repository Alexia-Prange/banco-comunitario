import { ICliente } from "./ICliente";

export class Cliente implements ICliente{
    nome: string;
    id: number;
    endereco: string;
    telefone: number;
    salario: number;

    constructor(nome: string, id: number, endereco: string, telefone: number, salario: number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.salario = salario;
    }

    exibir(){
        console.log("Nome: "+this.nome + ", id: "+ this.id + ", endereço: "+ this.endereco + ", telefone: " + this.telefone + ", salário: " + this.salario)
    }
}
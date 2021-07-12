class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf) {
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao("João", 23, "00000", "4345224810")
console.log(cidadao instanceof Pessoa)
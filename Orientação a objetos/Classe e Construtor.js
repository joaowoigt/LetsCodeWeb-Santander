class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("João", 23)  // precisa colocar new para indicar que sera um objeto
console.log(pessoa1)
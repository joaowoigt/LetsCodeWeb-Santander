const pessoa = {nome: 'João', idade: 23};  // Criando um objeto (não precisa fazer uma classe)

console.log(pessoa.nome);

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base * this.altura}  // Criando métodos
};

console.log(quadrado.calculaArea())
class Quadrado {
    constructor(lado, altura) {
        let cor = "blue";  // Atributo encapsulado dentro do construtor
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => {return cor;}  // Método para acessa-lo também dentro 
    }
}

const quadrado = new Quadrado(2, 3)

console.log(quadrado.getCor())
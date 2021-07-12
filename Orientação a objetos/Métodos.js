class Quadrado {
    constructor(base, altura) {
        if(isNaN(base) || isNaN(altura)) throw "Informação não numérica"
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // Passando um parametro nao obrigatorio
    }

    calculaArea() {
        return this.base * this.altura
    }

    duplicaBase(){
        this.base = 2 * this.base
    }
}

const quadrado = new Quadrado(5, 4)
quadrado.duplicaBase()
console.log(quadrado.calculaArea())

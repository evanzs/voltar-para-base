
//import item CORE
const {PI} = Math

export class Circulo {
    constructor(raio){
        this.raio = raio;
    }

    area = () => PI * (this.raio**2);
    perimetro = () => 2*PI*this.raio;
}
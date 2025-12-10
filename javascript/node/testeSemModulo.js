const circulo = require('./circuloSemModulo.js')
// const CirculoModulo = require('./circulo.js')


const c1 = new circulo(1);

console.log(c1.area());
console.log(c1.perimetro());


// // aqui para baixo é pra dar erro

// const c2 = new CirculoModulo(1);
// console.log(c2.perimetro());
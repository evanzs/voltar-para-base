// Trabalhando com objetos em typescript


// Objeto inferido
let user = {
    name: 'Evandro',
    age: 38
}


let userDois :{
    name: string;
    age: number;
} = {
    name:'Idoso',
    age:30
}


// erro pois não tem todos as caracteristicas.
let userTres :{
    name: string;
    age: number;
    hobbies: string[]
} = {
    name:'Idoso',
    age:30
}




// EM TYPECRIPT o {} sginfica apenas que o objeto não é nulo:

// exemplo:
let valor :{} // ele pode ser qualquer coisa menos numero
// exemplo 1:
valor = 'Evandro'
valor = 55555;
valor = null; // erro
valor = undefined; // erro

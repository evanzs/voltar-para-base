

// o '?' no atributo ou parametro define como algo opcional de ser usado.
type Usuario = {
    name:string,
    age:number,
    role?:'admin' |'quest'
}
// exemplo

let usuarioTeste:Usuario ={
    name:"teste",
    age:10
}

// também valido
let usuarioTeste1:Usuario ={
    name:"teste",
    age:10,
    role:'admin'
}


//também é possivel usar funções


function testeOpcional(name?:string){
    console.log(name)
}

// dois metodos valem
testeOpcional();
testeOpcional('hi')
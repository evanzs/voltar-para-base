type Roler = {
    name:string,
    age:number

}

// funções pode receber parametros tipados assim como retornar

//Retornar erro pq n tem returno do tipo mencionado
function access(role:Roler): Roler {

}


function access1(role:Roler): Roler {
    const roler:Roler ={
        name:'martns',
        age:10
    }

    return roler;
}



// return esta com erro pq n condiz com o esperado
function access3(role:Roler): Roler {
    const roler ={
        name:'martns',
        age:'10'
    }

    return roler;
}




// TIPO DE RETORNOS

// Define o retorno da função como vazio,
function retornoVoid (): void {
    return;
}

function retornoVoid1 (): void {
    let user:void;
    return user;
}

function retornoVoid2 (): void {
    console.log("teste")
}

let testeVoid = retornoVoid();
testeVoid.access

// Tipo NEVER define que nunca havera algum tipo de retorno, inclusive não haverá "void"
// Isso impede que alguem possa usar
function logAndThrow(msg:string): never {
    console.log(msg);
    throw new Error(msg); // não só não terá retorno como lansa um erro
}

let testeRetorno = logAndThrow('oi');
testeRetorno.access

// NEVER não permite retornos void
function logAndThrow1(msg:string): never {
    console.log(msg);
   
}

function logAndThrow2(msg:string): never {
    console.log(msg);
   return;
}






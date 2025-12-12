// trabalhando com pilha de chamada
// estrutura de pilha :LIFO
// excecução snicrona, ou seja o chamador é bloqueado. 


const f1 = (a,b) => a+b;

const f2 = (a) => {
    valor = f1(a,a)
    console.log(valor);
}

f2(6)
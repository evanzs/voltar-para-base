// trabalhando com pilha de chamada
// estrutura de pilha :LIFO
// excecução snicrona, ou seja o chamador é bloqueado. 

// FUNCOES SYNC
const f1 = (a,b) => a+b;

const f2 = (a) => {
    valor = f1(a,a) // chama f1 e bloquea f2
    
    console.log(valor); // volta para o f2 após chamar f1
}

f2(6)

// OBS: comportamento SYNC pode ser bloqueante e causar transtornos. 
// em JS usasse ASYNC para n bloquear as trheads


// Trabalhando com funcções ASYNC


const somar = async (a,b) =>  a + b;

console.time("tempo bloq")
const imprimir_soma = async (a,b) => {
    let valor = await somar(a,b) // forma bloqueante
    console.log("printar valor: ",valor);
    return "Processo Concluido";
}
console.log("teste de tempo")
console.timeEnd("tempo bloq");

console.time("tempo2 n bloq")
imprimir_soma(1,2).then ( // then espera o retorno e executa os demais
    (retorno) => console.log("retorno: ",retorno)
)
console.log("teste de tempo2")
console.timeEnd("tempo2 n bloq");
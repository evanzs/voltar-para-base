function somar(){
    const n1 = Number(document.getElementById('num1').value)
    const n2 = Number(document.getElementById('num2').value)
    const n3 = Number(document.getElementById('num3').value)
    const n4 = Number(document.getElementById('num4').value)
    const soma = n1 + n2 +n3 + n4;
    document.getElementById('resultadoFora').innerHTML = soma;
}


function calcular(operacao,n1,n2,n3,n4){
    let resultado = 0;
    switch(operacao){
        case '-': 
        resultado = n1 - n2- n3 -n4;
        break;

        case '+': 
        resultado = n1 + n2+ n3+n4;
        break;

        case '/': 
        resultado = n1 / n2/ n3/n4;
        break;

        case '*': 
        resultado = n1 * n2* n3*n4;
        break;

        case '%': 
        resultado = n1 % n2% n3%n4;
        break;
    }

    return resultado;
}

const fatorialFora = (x) => {
    return x == 1 ? 1 : x * fatorialFora(x-1);
}


// usa o () no lugar de {} e remove o RETURN
const fatorialForaDois = (x) => (x == 1 ? 1 : x * fatorialFora(x-1));

// quando for só uma linha pode ser direto assim:
const fatorialForaTres = (x) => x == 1 ? 1 : x * fatorialFora(x-1)


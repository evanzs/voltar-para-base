// Operador ?? e diferença entre outras verificações


let testeInput = null;

// o operador || vai verificar se a variavel a esquerda existe, senão ele define oque tiver na direita (false)

// como nos exemplso abaixo os valores primeiraos são nulos ele assume o segundo

let input = testeInput || false;  // input : boolean

let input2 = testeInput || 'true'; // input : string;



// Já no exemplo abaixo como o valor existe então temos dois tipos inferidos
let testeInput1 = ''
let input3 = testeInput1 || false;  // input : string | boolean

let input4 = testeInput1 || 3; // input : string | number


// Já com OPERADOR ?? ele verifica se o valor da esquerda é valido senão ele aplica o da direita

let testeInput2 = null ;
let input5 = testeInput2 ?? false; // input5 : boolean


let testeUndefined = undefined
let input6 = testeUndefined ?? false; // input6 : boolean


// No exemplo abaixo, como o tipo existe e é valido, ele define a tipagem
// OU SEJA, caso o valor da esquerda não existe ele define como valor da direta
let testedefined = 'undefined'
let input7 = testedefined ?? false; // input6 : string
// Trabalhnado com records

// um tipo de OBJ que vc cria tipando os valors mas não sabe quais as chaves terão no objeto ainda


exemplo: 


let val: Record<number,number>;
val = {} // pode ser um objeto 

// exemplo de uma declaração Record<number,number> onde chave  e tipo das chaves tb
val = {
    2: 13,
    3: 13
}

val = {
    chave: 13,
    chav3: '13'
}


let val2: Record<string,number | string>;
val2 = {} // pode ser um objeto 

// exemplo de uma declaração Record<number,number> onde temos chave e tipo das chaves tb ( number ou string)
val2 = {
    chave: 13,
    chav3: '13'
}

val2 = {
    chave: 13,
    3: '13'
}


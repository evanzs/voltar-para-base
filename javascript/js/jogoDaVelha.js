function iniciar(){
    board = document.getElementById('board')
    tabuleiro = []
    jogador = 0;

    for(let l = 0; l<3; l++){
        tabuleiro[l]=[]
        for(c=0;c<3;c++){
            tabuleiro[l][c] = 0;
        }
    }

    exibir()    
    atualizarJogador()
}

const exibir = function(){
    let tabela = '<table cellpadding="28" border="1">'
    let aux = '';

    for(let i =0; i <3; i++){
        aux+= '<tr>';
        for(let a=0; a<3; a++){
            switch(tabuleiro[i][a]){
                case 'X':
                    aux+='<td>X</td>'
                    break;
                case 'O':
                    aux+='<td>O</td>'
                    break;    
                default:
                    aux+='<td></td>'
            }
                        
        }
        aux+= '</tr>'
    }

    aux+= '</table>'

    tabela+=aux;
    
    board.innerHTML = tabela;
}

const jogar = () =>{    
    document.getElementById('avisoGeral').innerText = ''
    let linha = Number(document.getElementById('linha').value);
    let coluna = Number(document.getElementById('coluna').value);

    if(linha == 0 || coluna == 0) return;   

    if(tabuleiro[linha-1][coluna-1] != 0 ){
        return document.getElementById('avisoGeral').innerText = 'Posição já marcada.'
    }

    marcarTabuleiro(linha,coluna);
    exibir();
    if(checar()){
        return document.getElementById('avisoGeral').innerText = 'Jogador ' + jogador + ' ganhou!!' 
    }

    atualizarJogador();  
}

const marcarTabuleiro = (linha,coluna) => {

    jogador == 1 ? tabuleiro[linha-1][coluna-1] = 'X' : tabuleiro[linha-1][coluna-1] = 'O'
}

const contarJogador = () => jogador= (jogador)%2 + 1;

const atualizarJogador = () => document.getElementById('avisoJogador').innerText= 'Vez do jogador ' + Number(contarJogador());


const checar = () => {   
    const resultColuna = verificaColuna(tabuleiro)
    const resultLinha= verificaLinha(tabuleiro)
    const resultDiagonal =verificaDiagonal(tabuleiro)

    return resultColuna || resultLinha || resultDiagonal
}

const verificaColuna = (tab) => {   
      
    for (let col = 0; col < 3; col++) {
        if (tab.every(linha => linha[col] === 'X')) {
          return true;
        }
    }

    for (let col = 0; col < 3; col++) {
        if (tab.every(linha => linha[col] === 'O')) {
          return true;
        }
    }

  return false;
   
}

const verificaLinha = (tab) => {    

    let resultUm = tab.some(linha => linha.every(el => el == 'X' ))
    let resultDois = tab.some(linha => linha.every(el => el == 'O' ))

    return resultUm || resultDois
}

const verificaDiagonal = (tab) => {
    let testeUm = (tab[0][0] === 'X' || tab[0][0] === 'O') && (tab[1][1] === 'X' || tab[1][1] === 'O') &&  (tab[2][2] === 'X' || tab[2][2] === 'O')
    let testeDois = (tab[2][0] === 'X' || tab[2][0] === 'O') && (tab[1][1] === 'X' || tab[1][1] === 'O') &&  (tab[0][2] === 'X' || tab[0][2] === 'O')

    return  testeUm || testeDois
}
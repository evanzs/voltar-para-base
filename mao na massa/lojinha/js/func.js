const atualizaQtd = (produtoId,acao) => {
    qtd = document.getElementById('qtd-'+produtoId)
    valor = document.getElementById('valor-'+produtoId)
    total = document.getElementById('total-'+produtoId)
    
    if( acao == '-' && qtd.innerHTML === '0'){
        return alert('Não é possivel valor negativo.')
    }
    acao === '+' ? qtd.innerHTML++ : qtd.innerHTML--;
    calcularTotal();
}

const calcularTotal = () => {
    let soma = 0;
  
    soma = soma + qtd.innerHTML*valor.innerHTML; 
    total.innerHTML= soma;

    calcularSubTotal();
    
}


const calcularSubTotal = () => {
    let soma = 0;
    for (let produtoId = 1; produtoId <= 3; produtoId++){
        
        console.log( Number(document.getElementById('total-'+produtoId).innerHTML))

        soma += soma + Number(document.getElementById('total-'+produtoId).innerHTML)
        console.log(soma);
    }

    document.getElementById('subTotal').innerHTML = soma;
}
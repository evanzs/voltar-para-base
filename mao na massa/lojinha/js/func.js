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

}
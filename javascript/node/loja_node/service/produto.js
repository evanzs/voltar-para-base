import Produto from "../model/produto.js"

export const getAll = async () => {
    const produtos = await Produto.findAll();
    return produtos;
}

export const getById = async (id) =>{ 
   
    const produto = await Produto.findByPk(id)
    return produto;
}


//Produto.findAll().then((produtos)=> console.log(produtos))
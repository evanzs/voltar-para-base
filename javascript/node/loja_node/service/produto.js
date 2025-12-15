import Produto from "../model/produto.js"

export const getAll = async () => {
    const produtos = await Produto.findAll();
    return JSON.stringify(produtos);
}


Produto.findAll().then((produtos)=> console.log(produtos))
import { Router } from 'express';
import { getAll,getById } from '../service/produto.js';

const router = Router();

router.get('/', async (req,res) => {
    const produtos = await getAll();
    
   res.json(produtos)
   res.end();
})

router.get('/:id', async (req,res) => {
    await getById(req.params.id).then(
        (produto) => {
            if(produto != null){
                res.json(produto)
                res.end();
            }else {
                res.json('Produto não encontrado')
                res.end();
            }
        }
    ).catch((err) => {
        res.json({codigo: err , mensagem:'Não foi possivel retornar o produto'})
        res.end();
    });
})

export default router
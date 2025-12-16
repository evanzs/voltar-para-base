import express from 'express'
import produtoController from './controllers/produto-controller.js'


const app = express();

const port = 3000


app.use(express.json())

app.use('/produtos',produtoController)
app.get('/',(req,res) => {
    res.json({mensagem:"Hello WOrld"});
    res.end(); // termina a conexao
})


// app.get('/produtos', async (req,res) =>{
//     const produtos = await getAll();
//     res.json(produtos)
// })



app.listen(port,() => {
    console.log("Servidor executando na porta:",port)
});


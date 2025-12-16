import express from 'express'
import produtoController from './controllers/produto-controller.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express();

const port = 3000


app.use(bodyParser.json());
app.use(cors({origin:'*'})); // define qual a origem será aceita, todavia nesse caso será todas. 



app.use('/produtos',produtoController)// define a roda


app.get('/',(req,res) => {
    res.json({mensagem:"Hello WOrld"});
    res.end(); // termina a conexao
})



app.listen(port,() => {
    console.log("Servidor executando na porta:",port)
});


import express from 'express'
import produtoController from './controllers/produto-controller.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './swaggerDocument.json' assert {type:'json'}

const app = express();

const port = 3000



//CONFIGS:
app.use(bodyParser.json());
app.use(cors({
    origin: '*',                 // ou domínio específico
    methods: ['GET','POST', 'PUT', 'DELETE'], // POST NÃO permitido
}));




//ROTAS:
app.use(
   '/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc)
)


app.use('/produtos', produtoController)// define a roda


app.get('/', (req, res) => {
    res.json({ mensagem: "Hello WOrld" });
    res.end(); // termina a conexao
})



app.listen(port, () => {
    console.log("Servidor executando na porta:", port)
});


import express from 'express'
import webhooks from 'node-webhooks'



const app = express();
const appWebHooks = express();
const port = 3000
const webhooksPort = 3003



appWebHooks.use(express.json())
app.use(express.json());


app.get('/', (req,res) => {
    const hooks = registerHooks();
    hooks.trigger('callback_hook',{msg:"chamando hook salvo"});
    hooks.trigger('callback',{msg:"chamando hook interno"});
    res.json("Teste com Webhooks"); 

});

app.get('/webhook-interno', (req,res) => {
    const hooks = registerHooks();
    hooks.trigger('callback',{msg:"chamando hook interno"});
    res.json("Teste com Webhooks interno"); 
});


const registerHooks = () =>{
    return new webhooks({
        db: {
             'callback_hook': ['http://localhost:3003/webhook-client'], // quando tiver um hook com esse nome chama um vetor de endereços
             'callback': ['http://localhost:3000/webhook-client'] // quando tiver um hook com esse nome chama um vetor de endereços

            }
    });
}

appWebHooks.post('/webhook-client', async (req,res) => {
    console.log(req.body.msg)
    return res.status(200).end();
})

app.post('/webhook-client', async (req,res) => {
    console.log(req.body.msg)
    return res.status(200).end();
})




app.listen(port,()=>{
    console.log("Servidor executando na porta: ", port)
})

appWebHooks.listen(webhooksPort,()=>{
    console.log("Servidor Webhook executando na porta: ", webhooksPort)
})
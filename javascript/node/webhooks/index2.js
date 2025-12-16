import express from 'express'
import webHooks from 'node-webhooks';


const app1 = express();
const app2 = express();

const portApp1 = 3000;
const portApp2 = 3002;



app1.use(express.json());
app2.use(express.json());

const registerHooks = () => {
    return new webHooks({
        db : {
            'call_app1':['http://localhost:3000/webhook-client'],
            'call_app2':['http://localhost:3002/webhook-client']
        }
    })
}


app1.get('/chama', async (req,res)=>{
    const chamada = 1;
    const hooks = registerHooks();
    hooks.trigger('call_app2',{msg:chamada})
    res.json("Teste webhook loop")
})


app1.post('/webhook-client', async (req,res)=>{
    console.log("chamou o app1 tantas vezes: ", req.body.msg)
    const chamada =  Number(req.body.msg) + 1;
    const hooks = registerHooks();
    hooks.trigger('call_app2',{msg:chamada})
    return res.status(200).end();
})



app2.post('/webhook-client', async (req,res)=>{
    console.log("chamou o app2 tantas vezes: ", req.body.msg)

    const chamada =  Number(req.body.msg) + 1;
    const hooks = registerHooks();
    hooks.trigger('call_app1',{msg:chamada})
    return res.status(200).end();
})





app1.listen(portApp1, () =>{
    console.log("Executando Servidor 1 na porta: ", portApp1)
})

app2.listen(portApp2, () =>{
    console.log("Executando Servidor 2 na porta: ", portApp2)
})
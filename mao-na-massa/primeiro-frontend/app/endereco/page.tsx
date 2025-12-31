
'use client'

import { useEffect, useState } from 'react'
import Navegar from '../components/Navegar'
import { Form, Button } from 'react-bootstrap'

const pages = () => {

  const [cep,setCep] = useState('')
  const [endereco,setEndereco] = useState({

    logradouro:"",
    bairro:"",
    localidade:"",
    estado:"",
    uf:"",

  })
  

  useEffect(() =>{
    const cepLimpo = cep.replace(/\D/g,"");

    if(cepLimpo.length ===8){
      fetch('https://viacep.com.br/ws/'+ cepLimpo +'/json/').then((resp)=> resp.json()).then( (data) => {
        if(!data.erro){
          setEndereco(data)
        }else{
          setEndereco({
            logradouro: "",
            bairro: "",
            localidade: "",
            estado: "",
            uf: ""
          })
        }

      })
    }
  })
  return (
    <>
      <Navegar>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>cep:</Form.Label>
            <Form.Control type="email"  value={cep} onChange={(e)=>{ setCep(e.target.value)}}/>
            <Form.Text className="text-muted" >
              Digite o cep
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>logradouro</Form.Label>
            <Form.Control type="email"   value={endereco.logradouro}/>
            <Form.Text className="text-muted">
             
            </Form.Text>

            <Form.Label>uf</Form.Label>
            <Form.Control type="email"   value={endereco.uf}/>
            <Form.Text className="text-muted">
            </Form.Text>

            <Form.Label>bairro</Form.Label>
            <Form.Control type="email"  value={endereco.bairro} />
            <Form.Text className="text-muted">
            </Form.Text>

            <Form.Label>cidade</Form.Label>
            <Form.Control type="email"  value={endereco.localidade} />
            <Form.Text className="text-muted">
            </Form.Text>

            <Form.Label>estado</Form.Label>
            <Form.Control type="email"  value={endereco.estado} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>
      </Navegar>
    </>
  )
}

export default pages


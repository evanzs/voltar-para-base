import { useState } from 'react'
import './App.css';
import InputTarefa from './components/InputTarefa';
import CardTarefa from './components/CardTarefa';
import NavBar from './components/css-module/NavBar'
import BotaoCustom from './components/css-styled-components/BotaoCustom';
import styled from 'styled-components'

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "tarefa 1", completo: false },
    { id: 2, titulo: "tarefa 2", completo: false },
    { id: 3, titulo: "tarefa 3", completo: true },
  ])

  const [inputTarefa, setInputTarefa] = useState('')

  const BotaoCustom = styled.button`background-color:red; color:white; padding:10px;`;


  return (
    
    <div className="App container-principal">
      <NavBar></NavBar>
      <InputTarefa inputTarefa={inputTarefa} setInputTarefa={setInputTarefa} tarefas={tarefas} setTarefas={setTarefas} ></InputTarefa>
      <CardTarefa titulo="Tarefas pendentes" tarefas={tarefas.filter(tarefa => !tarefa.completo)} setTarefas={setTarefas}/>
      <CardTarefa titulo="Tarefas Finalizadas" tarefas={tarefas.filter(tarefa => tarefa.completo)} setTarefas={setTarefas}/>
      <BotaoCustom>Teste de Styled components</BotaoCustom>
      {/* <div className="container-lista">
        <h3>Lista de tarefas finalizadas:</h3>
        {tarefas.map((tarefa) => (
          (tarefa.completo &&
          <div className="container-tarefa-finalizada">

            
            <div key={tarefa.id} className="container-finalizado">
              {tarefa.id} - {tarefa.titulo}
            </div>
          </div>
        )
        ))}
      </div> */}


    </div>
  );
}

export default App;

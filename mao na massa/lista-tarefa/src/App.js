import { useState } from 'react'
import './App.css';


function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "tarefa 1", completo: false },
    { id: 2, nome: "tarefa 2", completo: false },
    { id: 3, nome: "tarefa 3", completo: true },
  ])

  const [inputTarefa, setInputTarefa] = useState('')

  const addNovaTarefa = () => {
    if(!inputTarefa) return;
    const index = tarefas.length + 1;
    const tarefa = { id: index, nome: inputTarefa, completo: false }
    setTarefas([...tarefas, tarefa])
    setInputTarefa('')
  }
  const concluirTarefa = (id) => {
    tarefas[id-1].completo=true;
    setTarefas([...tarefas])
  }

  return (
    <div className="App">
      <div>
        {inputTarefa}
        <p>Nova Tarefa</p>
        <input type="text" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)}></input>
        <button onClick={addNovaTarefa}>Add Tarefa</button>
      </div>
      <div>
        <h3>Lista de tarefas pendente:</h3>
        {tarefas.map((tarefa) => (
          (!tarefa.completo &&
            <div key={tarefa.id}>
              <p>{tarefa.id} - {tarefa.nome}</p>
              {/* chama só com o click */}
              <button onClick={ () => concluirTarefa(tarefa.id)}>Finalizar</button>
              {/* assim chama o click logo que a tela rendereizar:
              <button onClick={concluirTarefa(tarefa.id)}>Finalizar</button> */}
            </div>

          )
        ))}
      </div>

      <div>
        <h3>Lista de tarefas finalizadas:</h3>
        {tarefas.map((tarefa) => (
          (tarefa.completo && <p key={tarefa.id}>{tarefa.id} - {tarefa.nome}</p>)
        ))}
      </div>

    </div>
  );
}

export default App;

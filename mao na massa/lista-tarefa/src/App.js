import { useState } from 'react'
import './App.css';


function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "tarefa 1", completo: false },
    { id: 2, titulo: "tarefa 2", completo: false },
    { id: 3, titulo: "tarefa 3", completo: true },
  ])

  const [inputTarefa, setInputTarefa] = useState('')

  const addNovaTarefa = () => {
    if (!inputTarefa) return;
    const index = tarefas.length + 1;
    const tarefa = { id: index, titulo: inputTarefa, completo: false }
    setTarefas([...tarefas, tarefa])
    setInputTarefa('')
  }
  const concluirTarefa = (id) => {
    tarefas[id - 1].completo = true;
    setTarefas([...tarefas])
  }

  return (
    <div className="App container-principal">
      <div className="input-nova-tarefa">
        {inputTarefa}
        <p>Nova Tarefa</p>
        <input type="text" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)}></input>
        <button onClick={addNovaTarefa}>Add Tarefa</button>
      </div>
      <div className="container-lista">
        <h3>Lista de tarefas pendente:</h3>
        {tarefas.map((tarefa) => (
          (!tarefa.completo &&
            <div key={tarefa.id} className="container-tarefa">
              <div className="container-titulo">{tarefa.id} - {tarefa.titulo}</div>
              {/* chama só com o click */}
              <div className="container-btn">
                <button onClick={() => concluirTarefa(tarefa.id)}>Finalizar</button>
              </div>
              {/* assim chama o click logo que a tela rendereizar:
              <button onClick={concluirTarefa(tarefa.id)}>Finalizar</button> */}
            </div>

          )
        ))}
      </div>

      <div className="container-lista">
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
      </div>


    </div>
  );
}

export default App;

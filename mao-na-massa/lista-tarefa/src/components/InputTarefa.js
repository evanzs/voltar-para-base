
export default function InputTarefa({inputTarefa,setInputTarefa,tarefas,setTarefas}) {

    const addNovaTarefa = () => {
    if (!inputTarefa) return;
    const index = tarefas.length + 1;
    const tarefa = { id: index, titulo: inputTarefa, completo: false }
    setTarefas([...tarefas, tarefa])
    setInputTarefa('')
  }

  return (
      <div className="input-nova-tarefa">
        {inputTarefa}
        <p>Nova Tarefa</p>
        <input type="text" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)}></input>
        <button onClick={addNovaTarefa}>Add Tarefa</button>
      </div>  )
}

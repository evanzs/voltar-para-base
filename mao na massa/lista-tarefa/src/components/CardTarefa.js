import React from 'react'
import Tarefa  from './Tarefa';
export default function CardTarefa({titulo,tarefasFiltrada,tarefas,setTarefas}) {
  return (
          <div className="container-lista">
        <h3>{titulo}:</h3>
        {tarefasFiltrada.map((tarefa) => (
          
        <Tarefa key={tarefa.id} tarefa={tarefa}  tarefas={tarefas} setTarefas={setTarefas}/>
        
        ))}
      </div>
  )
}

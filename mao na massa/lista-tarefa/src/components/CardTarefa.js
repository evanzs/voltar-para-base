import React from 'react'
import Tarefa  from './Tarefa';
export default function CardTarefa({titulo,tarefas,setTarefas}) {

    const concluirTarefa = (id) => {
      tarefas[id - 1].completo = true;
      setTarefas([...tarefas])
    }
  

  return (
          <div className="container-lista">
        <h3>{titulo}:</h3>
        {tarefas.map((tarefa) => (
          
        <Tarefa tarefa={tarefa} concluirTarefa={concluirTarefa}/>
        
        ))}
      </div>
  )
}

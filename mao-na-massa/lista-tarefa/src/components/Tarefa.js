import React from 'react'
import './Tarefa.css'
export default function Tarefa({ tarefa,tarefas, setTarefas }) {

    const concluirTarefa = (id) => {
        const index = tarefas.findIndex(tarefa => tarefa.id === id);
        tarefas[index].completo = true;
        setTarefas([...tarefas])

    }

    return (
        <div key={tarefa.id} className="container-tarefa">
            <div className={tarefa.completo ? 'container-titulo-finalizado' : 'container-titulo'}>{tarefa.id} - {tarefa.titulo}</div>
            {/* chama só com o click */}
            {tarefa.completo ?
                <i className="fa-solid fa-check"></i>
                :
                <div className="container-btn">
                    <button onClick={() => concluirTarefa(tarefa.id)}>Finalizar</button>
                </div>}
            {/* assim chama o click logo que a tela rendereizar:
              <button onClick={concluirTarefa(tarefa.id)}>Finalizar</button> */}
        </div>
    )
}

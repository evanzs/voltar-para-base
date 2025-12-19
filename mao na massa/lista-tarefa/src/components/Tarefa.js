import React from 'react'

export default function Tarefa() {
    return (
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
}

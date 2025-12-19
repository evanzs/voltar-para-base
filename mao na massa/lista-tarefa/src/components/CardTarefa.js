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
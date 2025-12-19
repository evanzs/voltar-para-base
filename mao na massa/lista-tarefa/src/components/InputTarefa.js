import React from 'react'

export default function InputTarefa() {
  return (
      <div className="input-nova-tarefa">
        {inputTarefa}
        <p>Nova Tarefa</p>
        <input type="text" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)}></input>
        <button onClick={addNovaTarefa}>Add Tarefa</button>
      </div>  )
}

import Tarefa  from './Tarefa';
import { TarefasContexto } from '../App';
import {useContext} from 'react'


export default function CardTarefaUseContext({titulo}) {

  const [tarefas,setTarefas] = useContext(TarefasContexto)
 

  return (
          <div className="container-lista">
        <h3>{titulo}:</h3>
        {tarefas.map((tarefa) => (
          
        <Tarefa key={tarefa.id} tarefa={tarefa}  tarefas={tarefas} setTarefas={setTarefas}/>
        
        ))}
      </div>
  )
}

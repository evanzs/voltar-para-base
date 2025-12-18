import { useState } from 'react'

export default function ContadorFuncao() {
    // definir estados em funcao
    // [ varaivel que usarei, funcao que vai atualizar ela] = useState( valor inicial)
    const [contador, setContador] = useState(0)

    // nao funciona arrow function
    function incrementa() {
        setContador(contador + 1)
    }

    const decrementa = () => {
        setContador(contador - 1)
    }

    return (
        <>
            <p>{contador}</p>
            <button onClick={incrementa}>
                Incrementa Contador Funcao
            </button>
            <button onClick={decrementa}>
                Decrementa Contador Funcao
            </button>
        </>
    )
}
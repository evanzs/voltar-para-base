
export default function BotaoFuncao(props) {
    return (
        <button onClick={() => console.log("clique no botão funcao")}> {props.titulo}</button>
    )
}

import { Component } from 'react'
export default class ContadorClasse extends Component {

    // define o construtuor e a props para super. 
    // define o state contador;
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
    }

    //cria um metodo para incrementar a var contador
    incrementa = () => {
        this.setState({ contador: this.state.contador + 1 })
    }

    decrementa = () => {
        this.setState({ contador: this.state.contador - 1 })
    }

    render() {
        return (
            <>
                <p>{this.state.contador}</p>
                <button onClick={this.incrementa}>
                    Incrementa Contador Classe
                </button>
                <button onClick={this.decrementa}>
                    decrementa Contador Classe
                </button>
            </>
        )
    }
}
import React, { Component } from 'react'

export default class BotaoClasse extends Component {
    render() {
        return (
            <button onClick={() => console.log("clique no botão Classe")}>
                {/* AO contrario do componente como função, 
        no compnente como classe a "PROPS" já existe no componente
        então é necessário só usar com "this" */}
                {this.props.titulo}
            </button>
        )
    }
}

import React, { Component } from 'react'

export default class HeaderClasse extends Component {
  render() {
    return (
      <div>
        <h1> REAC APP base Classe</h1>
        {this.props.children}
      </div>
    )
  }
}

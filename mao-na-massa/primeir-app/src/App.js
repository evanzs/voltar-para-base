import './App.css';
import BotaoFuncao from './components/BotaoFuncao';
import BotaoClasse from './components/BotaoClasse';
import HeaderClasse from './components/HeaderClasse';
import HeaderFuncao from './components/HeaderFuncao';
import ContadorClasse from './components/ContadorClasse';
import ContadorFuncao from './components/ContadorFuncao';

function App() {
  return (
    <div className="App">
     <h1>Primeira experienca com REACT!</h1>
     <BotaoFuncao titulo="Botão Função"></BotaoFuncao>
     <BotaoClasse titulo="Botão Como Classe"/>
    <HeaderFuncao>
      <p>Criação de filhos</p>
      <p>Criação de filhos com props children</p>
    </HeaderFuncao> 
    <HeaderClasse>
      <p>Criação de filhos</p>
      <p>Criação de filhos com props children</p>
    </HeaderClasse> 
    <hr/>
    <ContadorClasse/>
    <br/>
    <ContadorFuncao/>  
    </div>
  );
}

export default App;

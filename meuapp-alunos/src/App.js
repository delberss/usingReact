import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import { } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <h1>Minha aplicação React</h1>
      <ul>
        <li>Página Home</li>
        <li>Página Sobre</li>
        <li>Página Alunos</li>
      </ul>
    </div>
  );
}

export default App;

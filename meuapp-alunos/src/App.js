import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <h1>Minha aplicação React</h1>
      <BrowserRouter>
      
      <ul>
        <li><Link to='/'>Página Home</Link></li>
        <li><Link to='/alunos'>Alunos</Link></li>
        <li><Link to='/sobre'>Sobre</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/alunos' element={<Alunos/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

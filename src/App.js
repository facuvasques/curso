import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Button from './componentes/Button';
import Container from './Container/Container.js';
import ItemListContainer from "./componentes/ItemListContainer";


const App = () => {
  
  const [count, setCount] = useState(0)
  console.log(count)
  console.log(setCount)

  

 
  return (
    <div className="App">

      <NavBar />
      
      <header className="App-header">
        
  
        <div>
        <p style= { {color: '#ffc600'}}> {count}</p>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
        <div>
        <p style= { {color: '#ffc600'}}> {count}</p>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
        <ItemListContainer />
        <Container>
         <Button />
        </Container>
    
         <Button />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );

}

export default App

import { useEffect, useState } from 'react'
import './App.css';
import NavBar from './componentes/NavBar';
import Button from './componentes/Button';
import Container from './Container/Container.js';
import ItemListContainer from "./componentes/ItemListContainer";


const App = () => {
  

  

 
  return (
    <div className="App">

      <NavBar />
      
      <header className="App-header">
        
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

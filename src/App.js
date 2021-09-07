import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Button from './componentes/Button';
import Container from './Container/Container.js';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
 
  const handleclick =  () => {
    

    console.log(`click `)
  }

  const handleclick2 =  () => {
    console.log(`click2 `)
  }
 
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a nuestra tienda! ">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
         <Button funcion= {handleclick} />
        </Container>
    
         <Button funcion= {handleclick2} />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ItemListContainer>
    </div>
  );

}

export default App

import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Button from './componentes/Button';
import Container from './Container/Container.js';
import ItemListContainer from './componentes/ItemListContainer';


const productos = [
  {id: '01', name:'remera', description: 'indumentaria', stock: 23},
  {id: '02', name:'buzo', description: 'indumentaria', stock: 20},
]

function getList() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(productos), 1000)
    
  })
}

const App = () => {
  
  const [count, setCount] = useState(0)
  console.log(count)
  console.log(setCount)

  const [listFood, setListFood] = useState([])

  useEffect(() => {
    const list = getList()
    
    list.then(list => {
      setListFood(list)

    })
  }, [])

 
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          { listFood.map (e => <li key={e.id}>{e.name}</li>)}
        </div>
        <div>
        <p style= { {color: '#ffc600'}}> {count}</p>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
        <div>
        { listFood.map (e => <li key={e.id}>{e.name}</li>)}
        </div>
        <div>
        <p style= { {color: '#ffc600'}}> {count}</p>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
        
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

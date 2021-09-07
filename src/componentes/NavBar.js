import CartWidget from '../Container/CartWidget'
import './NavBar.css'

const NavBar  = () => {
    return ( 
     
      <nav class="navbar navbar-light bg-light asd">
        
      <div class="container-fluid">
        <h1 Class="titulo">E-COMERCE</h1>
        <div class="divC">
        <CartWidget />
        </div>
        
       <button class="btn">MENÚ</button>
       <button class="btn">PRODUCTOS</button>
       <button class="btn">NOSOTROS</button>
       
       
      </div>
     
     </nav>
     

      
      
    )
  
  }


export default NavBar
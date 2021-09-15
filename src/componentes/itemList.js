import { useEffect, useState } from 'react'
import Item from "./Item"


const ItemList = ({listFood}) => {
    
  
        const [count, setCount] = useState(0)
        console.log(count)
        console.log(setCount)
    


    return(

        <div className="product">
            {listFood.map(list => <Item list={list} key={list.id}/>)}
            <div>
              <p style= { {color: '#ffc600'}}> {count}</p>
              <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
              <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
            </div>
            
        </div>

        

        
        
    )
}

/*

const ItemList2 = ({listFood2}) => {
    
  
    const [count, setCount] = useState(0)
    console.log(count)
    console.log(setCount)



return(

    <div className="product">
        {listFood2.map(list2 => <Item list2={list2} key={list2.id}/>)}
        <div>
          <p style= { {color: '#ffc600'}}> {count}</p>
          <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count + 1)}>Agregar al carrito</button>
          <button type="button" class="btn btn-secondary btn-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
        
    </div>

    

    
    
)
}
*/

export default ItemList

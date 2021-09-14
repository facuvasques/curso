import { useEffect, useState } from 'react'
import ItemList from './itemList';

const productos = [
    {id: '01', name:'remera', description: 'indumentaria', stock: 23},
    {id: '02', name:'buzo', description: 'indumentaria', stock: 20},
  ]
  
  function getList() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve(productos), 1000)
      
    })
  }


const ItemListContainer = ({ greeting }) => {

    const [listFood, setListFood] = useState([])

  useEffect(() => {
    const list = getList()
    
    list.then(list => {
      setListFood(list)

    })
  }, [])

    return (
        <>
         <ItemList listFood={listFood}/> 
        </>
    )
}



export default ItemListContainer
import { useEffect, useState } from 'react'
import ItemList from './itemList';

const productos = [
    {id: '01', name:'remera', description: 'indumentaria', stock: 23, price:'2000'},
    
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

/*

const productos2 = [
    
    {id: '02', name:'buzo', description: 'indumentaria', stock: 20, price:'2500'},
  ]

  function getList2() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve(productos2), 2000)
      
    })
  }


const ItemListContainer2 = ({ greeting }) => {

    const [listFood2, setListFood] = useState([])

  useEffect(() => {
    const list2 = getList2()
    
    list2.then(list2 => {
      setListFood(list2)

    })
  }, [])

    return (
        <>
         <ItemList listFood2={listFood2}/> 
        </>
    )
}

*/



export default ItemListContainer

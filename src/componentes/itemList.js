import Item from "./Item"


const ItemList = ({listFood}) => {


    return(

        <div className="product">
            {listFood.map(list => <Item list={list} key={list.id}/>)}
        </div>
    )
}

export default ItemList
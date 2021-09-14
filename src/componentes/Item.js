const Item = ({list}) => {

    

    return(

        <div className="card card-body">
            
            <h1 className="card-title titleProduct">{list.description}</h1>
            <p className="card-text priceProduct">${list.name}</p>
            <p className="card-text stockProduct">Stock disponible: {list.stock}</p>
        
        </div>

)
}


export default Item
import './NavBar.css'

const Item = ({list}) => {

    

    return(

        <div className="card card-body">
            <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/img_3778img_37781-510fadb73498c94d0116315360563035-640-0.jpg" class="img"></img>
            <h1 className="card-title titleProduct">{list.name}</h1>
            <p className="card-text priceProduct">${list.price}</p>
            <p className="card-text stockProduct">Stock disponible: {list.stock}</p>
        
        </div>

)
}

/*
const Item2 = ({list2}) => {

    

    return(

        <div className="card card-body">
           
            <h1 className="card-title titleProduct">{list2.name}</h1>
            <p className="card-text priceProduct">${list2.price}</p>
            <p className="card-text stockProduct">Stock disponible: {list2.stock}</p>
        
        </div>

)
}
*/
export default Item

import productos from "./arrayProductos";
import Item from "./Item";
import { useParams } from "react-router-dom";

function ItemDetail (){
    const {id}=useParams();
    return (
        <div>
        { 
        
        productos
        .filter((productos)=> productos.names=== id)
        .map((producto)=> (
            <div className="App" key={producto.id} > 
            <h1>Equipos</h1>
             <Item 
               names = {producto.names}
               image = {producto.image}
               price = {producto.price}
               description = {producto.description}
               />
             </div>))
             }
             </div>
    )
}

export default ItemDetail;
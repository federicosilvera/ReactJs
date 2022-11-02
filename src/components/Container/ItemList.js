import productos from "./arrayProductos"
import Item from "./Item";
import React, {  useEffect} from "react";

function ItemList () {

    

    const productosPromise =()=>{
        let product = require ("./arrayProductos")
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(product)
                
            }, 2000)
        })
    }

    useEffect(()=>{
        async function fetchedProduct(){
            const product = await productosPromise();
            return product;
        }
        fetchedProduct()
        
    }, []);


    return (
        <div>
        { 
        
        productos.map((producto, i)=> (
            <div className="App" > 
            <h1>Equipos</h1>
             <Item key={i}
               names = {producto.names}
               image = {producto.image}
               price = {producto.price}
               />
             </div>))
             }
             </div>
    )
}

export default ItemList;
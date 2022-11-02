import productos from "./arrayProductos"
import Item from "./Item";
import React, { useState, useEffect} from "react";

function ItemList () {

    const [listProducts, setListProducts]= useState([])

    const productosPromise =()=>{
        
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(productos)
                
            }, 2000)
        })
    }
    
    useEffect(()=>{
       productosPromise().then(res=>setListProducts(res))
        
    }, []);


    return (
        <div>
        { 
        
        listProducts.map((producto, i)=> (
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
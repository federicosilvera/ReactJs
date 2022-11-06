import productos from "./arrayProductos"
import Item from "./Item";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
function ItemList () {
    const {id}=useParams();
    const [listProducts, setListProducts]= useState([])
    console.log(id)
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
        
       id ? listProducts
        .filter((productos)=> productos.names=== id)
        .map((producto)=> (
            <div className="App" key={producto.id}> 
            
            <h1>Equipos</h1>
             <Item 
               names = {producto.names}
               image = {producto.image}
               price = {producto.price}
               category = {producto.category}
               />
             </div>))
             
             
             :listProducts
             .map((producto)=> (
                 <div className="App" key={producto.id}> 
                 
                 <h1>Equipos</h1>
                  <Item 
                    names = {producto.names}
                    image = {producto.image}
                    price = {producto.price}
                    category = {producto.category}
                    />
                  </div>))
                 }
                  </div>
    )
}

export default ItemList;
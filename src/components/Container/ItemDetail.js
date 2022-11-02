
function ItemDetail (){
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
               description = {producto.description}
               />
             </div>))
             }
             </div>
    )
}

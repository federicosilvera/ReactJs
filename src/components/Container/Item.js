import './ItemListContainer.css'

const Item = ({names, image, price, description })=>{
    return (
        <div>
        <h3>{names} </h3>
          <img src={image} alt=""/>
         <div className='precio'> <p>{price}</p></div>
         <p>{description}</p>
        </div>
    )
}

export default Item;
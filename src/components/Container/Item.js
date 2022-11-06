import './ItemListContainer.css'
import { Link } from 'react-router-dom';

const Item = ({names, image, price, description })=>{
    return (
        <div>
        <Link to={`/item/${names}`}>
        <h3>{names} </h3>
          <img src={image} alt=""/>
         <div className='precio'> <p>{price}</p></div>
         <p>{description}</p></Link>
        </div>
    )
}

export default Item;
import CategoryButton from "../CategoryButton/CategoryButton";
import './Navbar.css';
import cart from "../CartWidget/img/carrito.png";
import {Link} from "react-router-dom";


const Navbar =({name})=> {
    return (
        <div className="Navbar">
       <Link to="./"> <div><b>Feditos-Shop</b></div> </Link>
        <Link to ="./category/AMD"> <CategoryButton name='AMD'/></Link> 
       <Link to ="./category/Intel"> <CategoryButton name='Intel'/></Link>
        <CategoryButton name='Contactame'/>
        <img className='img' alt='' src={cart}/>
        </div>
    );

}

export default Navbar
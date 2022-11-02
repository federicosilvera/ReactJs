import CategoryButton from "../CategoryButton/CategoryButton";
import './Navbar.css';
import cart from "../CartWidget/img/carrito.png";
import {Link} from "react-router-dom";


const Navbar =({name})=> {
    return (
        <div className="Navbar">
       <Link to="./"> <div><b>Feditos-Shop</b></div> </Link>
        <Link to ={`/category/${name}`}> <CategoryButton name='AMD'/></Link> 
        <CategoryButton name='Intel'/>
        <CategoryButton name='Contactame'/>
        <img className='img' alt='' src={cart}/>
        </div>
    );

}

export default Navbar
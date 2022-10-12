import CategoryButton from "../CategoryButton/CategoryButton";
import './Navbar.css';
import cart from "../CartWidget/img/carrito.png";

function Navbar() {
    return (
        <div className="Navbar">
        <div><b>Feditos-Shop</b></div>
        <CategoryButton name='AMD'/>
        <CategoryButton name='Intel'/>
        <CategoryButton name='Contactame'/>
        <img className='img' alt='' src={cart}/>
        </div>
    );

}

export default Navbar
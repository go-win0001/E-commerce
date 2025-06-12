
import './Header.css';

function Header({openCart}){

   return <div className="navbar">
        <h1>My React Store</h1>
        <button className='yellow-btn' onClick={openCart}>Cart</button>
    </div>
}

export default Header
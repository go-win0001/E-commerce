
import './Header.css';

function Header({openCart,openAddCart}){

   return <div className="navbar">
        <h1>My React Store</h1>
        <div>
          <button className='yellow-btn' onClick={openAddCart}>Add Cart</button>
          <button className='yellow-btn' onClick={openCart}>Cart</button>
        </div>
    </div>
}

export default Header
import Modal from "../../UI/modal/Modal";
import './Cart.css'

function CartItem({name,image}){
    return (
        <div className="cart-item">
            <div className="item-left">
                 <img src={require(`../../assets/${image}`)} alt="Item" className="item-image" />
              <div className="item-details">
                <h3>{name}</h3>
              </div>
            </div>
            <div className="counter">
             <button className="counter-btn">+</button>
             <h2 className="counter-value">1</h2>
             <button className="counter-btn">-</button>
            </div>
        </div>
    )
}

function Cart({showCart, closeCart,allCart}){
   if(!showCart) return null;
    console.log(allCart);
    return (
        <Modal closeCart={closeCart} >
          <div className="cart-container">
            {allCart.map((item)=><CartItem key={item.id} name={item.name} image={item.image} />)}
          </div>
        </Modal>
    )
}

export default Cart;
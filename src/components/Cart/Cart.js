import Modal from "../../UI/modal/Modal";
import './Cart.css'

function CartItem({id,name,image,quantity,handleIncQuantity,handleDcrQuantity}){
    return (
        <div className="cart-item">
            <div className="item-left">
                 <img src={require(`../../assets/${image}`)} alt="Item" className="item-image" />
              <div className="item-details">
                <h3>{name}</h3>
              </div>
            </div>
            <div className="counter">
             <button className="counter-btn" onClick={()=>handleIncQuantity(id)}>+</button>
             <h2 className="counter-value">{quantity}</h2>
             <button className="counter-btn" onClick={()=>handleDcrQuantity(id)}>-</button>
            </div>
        </div>
    )
}

function Cart({showCart, closeCart,allCart,handleDcrQuantity,handleIncQuantity}){
   if(!showCart) return null;
    console.log(allCart);
    return (
        <Modal closeCart={closeCart} >
          <h2 className="heading">Cart</h2>
          <div className="cart-container">
            {allCart.map((item)=>
            <CartItem 
               id={item.id}
               key={item.id} 
               name={item.name} 
               image={item.image} 
               quantity={item.quantity}
               handleDcrQuantity={handleDcrQuantity}
               handleIncQuantity={handleIncQuantity}
            />)
            }
          </div>
          <div className="last-btn">
            <button className="yellow-btn" onClick={closeCart}>Close</button>
            <button className="yellow-btn" onClick={closeCart}>checkout</button>
          </div>
        </Modal>
    )
}

export default Cart;
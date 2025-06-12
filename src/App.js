import Header from "./components/header/Header";
import Products from "./components/product/Product";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart,setCart] =useState(false)
  const [cartStore,setCartStore]=useState([])

  const openCart=()=> setCart(true);
  const closeCart=()=> setCart(false);

  const addToCartHandler=(productId,productUrl,productName)=>{
    const newCart={
      id:productId,
      name:productName,
      image:productUrl
    };
    
     setCartStore((prevData)=>[...prevData,newCart]);
  }

  return (
    <div >
      <Header openCart={openCart}/>
      <Products addToCart={addToCartHandler}/>
      <Cart showCart={showCart} closeCart={closeCart} allCart={cartStore}/>
    </div>
  );
}

export default App;

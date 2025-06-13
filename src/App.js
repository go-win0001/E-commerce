import Header from "./components/header/Header";
import Products from "./components/product/Product";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import AddCart from "./components/AddtoCart/AddCart";
import intialProduct from './products.json'

function App() {
  const [showCart,setCart] =useState(false)
  const [cartStore,setCartStore]=useState([])
  const [showAddCart,setshowAddCart]=useState(false);
  const [allProducts,setallProducts]=useState(intialProduct)

  const openCart=()=> setCart(true);
  const closeCart=()=> setCart(false);
  const openAddCart=()=> setshowAddCart(true);
  const closeAddCart=()=> setshowAddCart(false);

  const addProduct=(productName)=>{

    const product_to_add={
      id:allProducts.length+1,
      name:productName,
      image:"default_img.png"
    };

    setallProducts((state)=>[...state,product_to_add]);
    closeAddCart();
  }


  const addToCartHandler=(productId,productUrl,productName)=>{
    const itemIndex = cartStore.findIndex((d) => d.id === productId);
    const newCart={
      id:productId,
      name:productName,
      image:productUrl,
      quantity:1
    };

    if(itemIndex === -1){
      setCartStore((prevData)=>[...prevData,newCart]);
    }else{
       const newStore=[...cartStore];
       newStore[itemIndex].quantity+=1;
       setCartStore(newStore);
    }
  }
   const handleIncQuantity=(id)=>{
       const itemIndex = cartStore.findIndex((d) => d.id === id);
       const newStore=[...cartStore];
       newStore[itemIndex].quantity +=1;
       setCartStore(newStore);
   };
   const handleDcrQuantity=(id)=>{
         const itemIndex = cartStore.findIndex((d) => d.id === id);
       let newStore=[...cartStore];
       if(newStore[itemIndex].quantity === 1){
         newStore=cartStore.filter((_,indx)=> itemIndex !== indx);
       }else{
         newStore[itemIndex].quantity-=1;
       }
       setCartStore(newStore);
   };

  return (
    <div >
      <Header openCart={openCart} openAddCart={openAddCart}/>
      <Products addToCart={addToCartHandler} allProducts={allProducts}/>
      <Cart 
         showCart={showCart} 
         closeCart={closeCart} 
         allCart={cartStore}
         handleIncQuantity={handleIncQuantity}
         handleDcrQuantity={handleDcrQuantity}
      />
      <AddCart 
        showAddCart={showAddCart}
        closeAddCart={closeAddCart}
        addProduct={addProduct}
      />
    </div>
  );
}

export default App;

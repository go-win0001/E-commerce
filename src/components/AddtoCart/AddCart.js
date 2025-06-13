
import { useRef } from "react";
import Modal from "../../UI/modal/Modal";
import './AddCart.css'

function AddCart({showAddCart,closeAddCart,addProduct}){
    
    const nameRef=useRef();
    if(!showAddCart) return null;

    return(
        <div>
            <Modal closeCart={closeAddCart}>
                <div className="modal">
                    <h2>Add Product</h2>
                    <label for="productName">Enter Product Name</label>
                    <input  ref={nameRef} type="text" id="productName" placeholder="Enter product name" />
                    <button onClick={()=>addProduct(nameRef.current.value)}>Add Product</button>
                </div>
            </Modal>
        </div>
    )
}

export default AddCart;



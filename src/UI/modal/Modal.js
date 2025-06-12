
import './Modal.css'
function Modal({closeCart,children}){
    return(
        <div className="backdrop" onClick={closeCart}>
            <div className="modal"  onClick={(e) => e.stopPropagation()}> {/* modal also intialing teh closCart ,due to event propogation(Bubbling in Js) */}
                {children}
            </div>
        </div>
    )
}
export default Modal;
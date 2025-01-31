
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css";
import { useCart } from './CartContext';


function CartItem({id, title, price, image}) {
    const { removeItemFromCart } = useCart();
    return(
        <section className="cart-item">
            <img src={image} alt= {title} className="cart-item-image"/>
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{price}</h3>
                <div className="btn-card-div">
                <button 
                    type="button" 
                    className="btn-remove-card" 
                    onClick={() => removeItemFromCart(id)}>
                        <BsCartDashFill />
                    </button>
            </div>
            </div>
        </section>
    );
}

export default CartItem;

import "./CartItem.css";


function CartItem({title, price, image}) {
    return(
        <section className="cart-item">
            <img src={image} alt= {title} className="cart-item-image"/>
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{price}</h3>
                <div className="btn-card-div">
                <button type="button" className="btn-remove-card">-</button>
                </div>
            </div>
        </section>
    );
}

export default CartItem;
import React from "react";
import "./CartItem.css"

function CartItem() {
    return(
        <section className="cart-item">
            <img src=" " alt= "imagem do produto" className="cart-item-image"/>


            <div className="cart-item-content">
                <h3 className="cart-item-title">Título do produto</h3>
                <h3 className="cart-item-price">R$10,00</h3>
                <button type="button" className="btn-remove-card">-</button>
            </div>
        </section>
    );
}

export default CartItem;
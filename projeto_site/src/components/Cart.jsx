import React from 'react';
import "./Cart.css";
import CartItem from './CartItem';

function Cart() {
    return (
        <section className="cart">
            <div className="cart-items">
                <CartItem/>
            </div>
            <div className="cart-resume">Resumo do Carrinho</div>
            carrinho
        </section>
    );
}

export default Cart;
import React from 'react';
import "./Cart.css";
import CartItem from './CartItem';
import { useCart } from "./CartContext"; 

function Cart() {
    const { cartItems } = useCart();

     // Calculando o total
     const total = cartItems.reduce((acc, item) => {
        const priceNumber = parseFloat(item.price.replace("R$", "").replace(",", "."));
        return acc + priceNumber;
    }, 0);

    return (
        <div className="cart">
            <h2>Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>O carrinho está vazio</p>
            ) : (
                cartItems.map((item, index) => (
                    <CartItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                ))
            )}
            <div className="cart-resume">
                <h3>Total: R${total.toFixed(2)}</h3> 
            </div>
        </div>
    );
}

export default Cart;

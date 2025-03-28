import React from 'react';
import "./Cart.css";
import CartItem from './CartItem';
import { useCart } from "./CartContext"; 
import api from '../services/api';

function Cart() {
    const { cartItems } = useCart();

     // Calculando o total
     const total = cartItems.reduce((acc, item) => {
        const priceNumber = parseFloat(item.price.replace("R$", "").replace(",", "."));
        return acc + priceNumber;
    }, 0);

    //Finalizar e salvar compra
    const FinalizarCompra = async () => {
        try {
            api.post('/catalogo', {
                valorTotal: total,
                produtos: cartItems.map(item => ({ id: item.id }))
            })
            alert("Compra finalizada com sucesso!")
       
        } catch(error) {
            alert("Erro ao finalizar compra, tente novamente.")
        }
    }

    return (
        <div className="cart">
             <div className="cart-informations">
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
             </div>
            <div className="cart-resume">
                <h3>Total: R${total.toFixed(2)}</h3> 
            </div>
            <button className="buy-cart" onClick={ FinalizarCompra } >Finalizar Compra</button>
        </div>
    );
}

export default Cart;

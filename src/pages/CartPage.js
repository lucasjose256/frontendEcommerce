import React, { useState, useEffect } from "react";
import { fetchCartItems, removeFromCart, createOrder } from "../services/api";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems().then(setCartItems).catch(console.error);
  }, []);

  const handleRemove = (itemId) => {
    removeFromCart(itemId).then(() =>
      setCartItems((items) => items.filter((item) => item.id !== itemId))
    );
  };

  const handleCreateOrder = () => {
    createOrder(cartItems).then(() => {
      setCartItems([]);
      alert("Pedido realizado com sucesso!");
    });
  };

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemove} />
        ))}
      </ul>
      <button onClick={handleCreateOrder}>Finalizar Pedido</button>
    </div>
  );
};

export default CartPage;

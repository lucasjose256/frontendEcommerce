import React from "react";

const OrderCard = ({ order, onDelete }) => {
  return (
    <li className="order-card">
      <h3>Pedido #{order.id}</h3>
      <p>Status: {order.status}</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantidade: {item.quantity} - R$ {item.price}
          </li>
        ))}
      </ul>
      <p>Total: R$ {order.total}</p>
      <button onClick={() => onDelete(order.id)}>Excluir Pedido</button>
    </li>
  );
};

export default OrderCard;

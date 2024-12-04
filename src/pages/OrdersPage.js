import React, { useState, useEffect } from "react";
import { fetchOrders, deleteOrder } from "../services/api";
import OrderCard from "../components/OrderCard";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders).catch(console.error);
  }, []);

  const handleDelete = (orderId) => {
    deleteOrder(orderId).then(() =>
      setOrders((orders) => orders.filter((order) => order.id !== orderId))
    );
  };

  return (
    <div>
      <h2>Pedidos</h2>
      <ul>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;

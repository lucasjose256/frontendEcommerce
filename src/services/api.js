import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchProducts = () => axios.get(`${API_URL}/products`).then((res) => res.data);
export const fetchCartItems = () => axios.get(`${API_URL}/cart`).then((res) => res.data);
export const addToCart = (productId) =>
  axios.post(`${API_URL}/cart`, { productId });
export const removeFromCart = (itemId) =>
  axios.delete(`${API_URL}/cart/${itemId}`);
export const createOrder = (items) =>
  axios.post(`${API_URL}/orders`, { items });
export const fetchOrders = () => axios.get(`${API_URL}/orders`).then((res) => res.data);
export const deleteOrder = (orderId) =>
  axios.delete(`${API_URL}/orders/${orderId}`);

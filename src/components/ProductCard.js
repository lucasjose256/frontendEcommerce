import React from "react";
import { addToCart } from "../services/api";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    
    addToCart(product.id).then(() => alert("Produto adicionado ao carrinho!"));
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;

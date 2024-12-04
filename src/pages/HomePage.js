import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

const HomePage = () => {
  const [products, setProducts] = useState( [
    {
      id: 1,
      name: "Smartphone",
      price: 1500,
      stock: 10,
    },
    {
      id: 2,
      name: "Notebook",
      price: 3500,
      stock: 5,
    },
    {
      id: 3,
      name: "Fone de Ouvido",
      price: 200,
      stock: 25,
    },
    {
      id: 4,
      name: "Monitor",
      price: 1200,
      stock: 7,
    },
  ]);

  useEffect(() => {
    
    //fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

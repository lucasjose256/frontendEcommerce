import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Loja Virtual</h1>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/orders">Pedidos</Link>
      </nav>
    </header>
  );
};

export default Header;

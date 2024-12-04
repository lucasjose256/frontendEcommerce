import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <li>
      {item.name} - R$ {item.price}
      <button onClick={() => onRemove(item.id)}>Remover</button>
    </li>
  );
};

export default CartItem;

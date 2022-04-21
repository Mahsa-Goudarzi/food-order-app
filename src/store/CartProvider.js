import React from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  function handleAddItemToCart(item) {}

  function handleRemoveItemFromCart(id) {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

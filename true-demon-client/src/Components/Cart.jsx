// src/components/Cart.js
import React, { useState } from "react";

const Cart = () => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
    <h1 className="text-center">CART ITEM WILL BE DISPLAYED HERE</h1>
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import CartPresentation from "./CartPresentation";

const CartContainer = () => {
  const localData = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(localData) || [];
  const [isChecked, setIsChecked] = useState(false);
  let totalPrice;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("cartItems");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (cartItems) {
    totalPrice = cartItems.reduce((a, b) => a + b.price, 0);
  }else{
     totalPrice = 0;
     return totalPrice;
  }
  
  const isClickCheckAll = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CartPresentation
      cartItems={cartItems}
      totalPrice={totalPrice}
      isChecked={isChecked}
      isClickCheckAll={isClickCheckAll}
    />
  );
};

export default CartContainer;

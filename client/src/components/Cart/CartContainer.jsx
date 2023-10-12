import React, { useEffect, useState } from "react";
import CartPresentation from "./CartPresentation";

const CartContainer = () => {
  const localData = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(localData) || [];
  const [isChecked, setIsChecked] = useState(false);
  const [productCount, setProductCount] = useState(
    Array(cartItems.length).fill(1)
  );
  let totalPrice;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("cartItems");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [totalPrice]);

  if (cartItems) {
    totalPrice = cartItems.reduce((a, b) => a + b.price * productCount[cartItems.indexOf(b)], 0);
  } else {
    totalPrice = 0;
    return totalPrice;
  }

  const isClickCheckAll = () => {
    setIsChecked(!isChecked);
  };

  const clickPlusHandler = (index) => {
    const newCounts = [...productCount];
    newCounts[index] = newCounts[index] + 1;
    setProductCount(newCounts);
  };
  const clickMinusHandler = (index) => {
    const newCounts = [...productCount];
    if (newCounts[index] > 1) {
      newCounts[index] = newCounts[index] - 1;
    }
    setProductCount(newCounts);
  };

  return (
    <CartPresentation
      cartItems={cartItems}
      totalPrice={totalPrice}
      isChecked={isChecked}
      productCount={productCount}
      isClickCheckAll={isClickCheckAll}
      clickPlusHandler={clickPlusHandler}
      clickMinusHandler={clickMinusHandler}
    />
  );
};

export default CartContainer;

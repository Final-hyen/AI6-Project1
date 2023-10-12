import React, { useEffect, useState } from "react";
import CartPresentation from "./CartPresentation";

const CartContainer = () => {
  const localData = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(localData) || [];
  const [isOneCheck, setIsOneCheck] = useState(cartItems.map(() => false));
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

  const isClickAllProductCheck = () => {
    const allProductCheck = isOneCheck.map((item) => !isChecked);
    setIsOneCheck(allProductCheck)

    setIsChecked(!isChecked)
  }

  const isClickOneProductCheck = (index) => {
    const oneProductCheck = [...isOneCheck];
    oneProductCheck[index] = !oneProductCheck[index];
    setIsOneCheck(oneProductCheck)

    const allChecked = oneProductCheck.every((checkbox) => checkbox);
    setIsChecked(allChecked)
  }

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
      isOneCheck={isOneCheck}
      productCount={productCount}
      clickPlusHandler={clickPlusHandler}
      clickMinusHandler={clickMinusHandler}
      isAllCheck={isClickAllProductCheck}
      isClickOneProductCheck={isClickOneProductCheck}
    />
  );
};

export default CartContainer;

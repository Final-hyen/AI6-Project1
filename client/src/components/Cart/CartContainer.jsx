import React, { useEffect, useState } from "react";
import CartPresentation from "./CartPresentation";
import { useNavigate } from "react-router-dom";
import { isCart } from "../../utils/validation";
import { useRecoilState } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";

const CartContainer = () => {
  //const localData = localStorage.getItem("cartItems");
  //const [cartItems, setCartItems] = useState(JSON.parse(localData) || []);
  const [items, setItems] = useRecoilState(cartItemAtom);
  const [isOneCheck, setIsOneCheck] = useState(items.map(() => false));
  const [isChecked, setIsChecked] = useState(false);
  const [productCount, setProductCount] = useState(
    Array(items.length).fill(1)
  );
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.removeItem("cartItems");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items]);

  useEffect(() => {
    const totalPriceData = items.reduce(
      (a, item, idx) => a + item.price * productCount[idx],
      0
    );
    setTotalPrice(totalPriceData);
  }, [items, productCount, setTotalPrice]);

  const isClickAllProductCheck = () => {
    const allProductCheck = isOneCheck.map((item) => !isChecked);
    setIsOneCheck(allProductCheck);

    setIsChecked(!isChecked);
  };

  const isClickOneProductCheck = (index) => {
    const oneProductCheck = [...isOneCheck];
    oneProductCheck[index] = !oneProductCheck[index];
    setIsOneCheck(oneProductCheck);

    const allChecked = oneProductCheck.every((checkbox) => checkbox);
    setIsChecked(allChecked);
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

  const clickDeleteButton = () => {
    alert("It has been deleted.");
    const updateCartItems = items.filter((item, idx) => !isOneCheck[idx]);
    localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
    items(updateCartItems);
  };

  const clickOrderButton = (e) => {
    e.preventDefault();
    navigate("/buypage");
    setItems(
      items.map((item, idx) => {
        return {
          imgUrl: item.imgUrl,
          title: item.title,
          count: productCount[idx],
          price: item.price,
        };
      })
    );
  };

  return (
    <CartPresentation
      cartItems={items}
      totalPrice={totalPrice}
      isChecked={isChecked}
      isOneCheck={isOneCheck}
      isCart={isCart}
      productCount={productCount}
      clickPlusHandler={clickPlusHandler}
      clickMinusHandler={clickMinusHandler}
      isAllCheck={isClickAllProductCheck}
      isClickOneProductCheck={isClickOneProductCheck}
      clickDeleteButton={clickDeleteButton}
      clickOrderButton={clickOrderButton}
    />
  );
};

export default CartContainer;

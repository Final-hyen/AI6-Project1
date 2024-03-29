import React, { useEffect, useState } from "react";
import BuyPresentaion from "./BuyPresentaion";
import { useRecoilValue } from "recoil";
import { cartItemAtom, totalPriceAtom } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";
import { Order } from "../../api/productFetcher";
import { axiosClient } from "../../utils/axiosClient";

const BuyContainer = () => {
  const items = useRecoilValue(cartItemAtom);
  const totalPrice = useRecoilValue(totalPriceAtom);
  const [userinfo, setUserinfo] = useState({})
  const buyItem = JSON.parse(localStorage.getItem("buyItem"));
  const navigate = useNavigate();

  let href = localStorage.getItem("href").split("/");
  href = href[href.length - 1];

  let item;
  let price;

  useEffect(() => {
    axiosClient
      .get(`/userinfo`)
      .then((res) => {
        setUserinfo({phoneNumber: res.data.userinfo.phoneNumber, address: res.data.userinfo.address, address2: res.data.userinfo.address2})
      })
      .catch((err) => console.log(err));
  },[]);

  if (href === "cart") {
    item = items;
    price = totalPrice;
  } else {
    item = buyItem;
    price = item.price;
  }
  // click이벤트 발생 -> 서버에 order create -> Order함수에 맞게 정보 넣기.
  const clickCompleteButton = () => {
    navigate("/ordercompletepage");
    Order(item, price);
  };
  
  return (
    <BuyPresentaion
      items={item}
      setItems={clickCompleteButton}
      totalPrice={price}
      href={href}
      userinfo={userinfo}
    />
  );
};

export default BuyContainer;

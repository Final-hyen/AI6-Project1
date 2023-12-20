import React, { StrictMode, useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import OrderGetPresent from "./OrderInfoGetPresent";

const OrderGetContain = () => {
  const [orderUserInfo, setOrderUserInfo] = useState([]);

  useEffect(() => {
    let isCleanUp = true;
    const fetchData = async () => {
      try {
        const res = await axiosClient.get(`/orders`);
        if (isCleanUp && res?.status === 200) {
          setOrderUserInfo(res.data.order);
        };
      } catch (err) {
        console.error(err);
      };
    };
    fetchData();
    return () => {
      isCleanUp = false;
    };
}, []);

  orderUserInfo.map((order) => {
    const dateString = new Date(order['create_at']);
    const year = dateString.getFullYear();
    const month = dateString.getMonth() + 1;
    const day = dateString.getDay();
    const hour = dateString.getHours();
    const min = dateString.getMinutes();
    const date = `${year}년 ${month}월 ${day}일 ${hour}시 ${min}분`;
    order['create_at'] = date;
  });
  
  return (
    <StrictMode>
      <OrderGetPresent ordersInfo={orderUserInfo} />
    </StrictMode>
  );
};

export default OrderGetContain;

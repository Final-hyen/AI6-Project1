import React, { StrictMode, useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import OrderGetPresent from "./OrderInfoGetPresent";

const OrderGetContain = () => {
  const [orderUserInfo, setOrderUserInfo] = useState([]);
  let orderInfo = [];
  let orders = [];
  useEffect(() => {
    axiosClient
      .get(`/orders`)
      .then((res) => {
        setOrderUserInfo(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOrderUserInfo]);

  orderUserInfo.map((order) => orderInfo.push(order.product_info))
  // 원하는 정보를 뽑았다!
  for (let i = 0; i < orderInfo.length; i++){
    for(let j = 0; j < orderInfo[i].length; j++){
      orders.push(orderInfo[i][j])
    }
  }
  console.log(orders)
  return (
    <StrictMode>
      <OrderGetPresent orderUserInfo={orderUserInfo} orders={orders} />
    </StrictMode>
  );
};

export default OrderGetContain;

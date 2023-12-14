import React, { StrictMode, useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import OrderGetPresent from "./OrderInfoGetPresent";

const OrderGetContain = () => {
  const [orderUserInfo, setOrderUserInfo] = useState([]);
  let ordersInfo = [];
  let orders = [];
  let dates = [];
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

  orderUserInfo.map((order) => ordersInfo.push(order.product_info))
  // 원하는 정보를 뽑았다!
  for (let i = 0; i < ordersInfo.length; i++){
    for(let j = 0; j < ordersInfo[i].length; j++){
      orders.push(ordersInfo[i][j])
    }
  }
  
  orderUserInfo.map((order) => {
    const dateString = new Date(order['create_at'])
    const year = dateString.getFullYear();
    const month = dateString.getMonth()+1;
    const day = dateString.getDay();
    const hour = dateString.getHours();
    const min = dateString.getMinutes();
    const date = `${year}년 ${month}월 ${day}일 ${hour}시 ${min}분`;
    dates.push(date)
  })

  console.log(orders)
  return (
    <StrictMode>
      <OrderGetPresent ordersInfo={ordersInfo} orders={orders} dates={dates}/>
    </StrictMode>
  );
};

export default OrderGetContain;

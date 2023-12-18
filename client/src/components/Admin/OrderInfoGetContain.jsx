import React, { StrictMode, useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import OrderGetPresent from "./OrderInfoGetPresent";

const OrderGetContain = () => {
  const [orderUserInfo, setOrderUserInfo] = useState([]);
  let ordersInfo = [];
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

  orderUserInfo.map((order) =>
    ordersInfo.push([order.product_info, order.create_at])
  );
  // 원하는 정보를 뽑았다!
  // for (let i = 0; i < ordersInfo.length; i++){
  //   for(let j = 0; j < ordersInfo[i].length; j++){
  //     orders.push(ordersInfo[i][j])
  //   }
  // }
  //console.log(ordersInfo[0][0], ordersInfo[0][1]);

  ordersInfo.map((order) => {
    const dateString = new Date(order[1]);
    const year = dateString.getFullYear();
    const month = dateString.getMonth() + 1;
    const day = dateString.getDay();
    const hour = dateString.getHours();
    const min = dateString.getMinutes();
    const date = `${year}년 ${month}월 ${day}일 ${hour}시 ${min}분`;
    order[1] = date;
  });
  console.log("ordersInfo", ordersInfo);
  const a = [];
  ordersInfo.map((orders) => orders.map((order) => a.push(order)));
  console.log("a", a);

  function divideDataByDate(data) {
    let currentDate = null;

    const dividedData = data
      .filter((item) => {
        if (typeof item === "string") {
          currentDate = item
          return false;
        } else {
          return true;
        }
      })
      .map((item) => {
        return { date: currentDate, data: item };
      });

    return dividedData;
  }
  console.log('b',divideDataByDate(a));
  return (
    <StrictMode>
      <OrderGetPresent ordersInfo={ordersInfo} orders={orders} />
    </StrictMode>
  );
};

export default OrderGetContain;

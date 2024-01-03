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
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    return () => {
      isCleanUp = false;
    };
  }, []);
  console.log(orderUserInfo);

  orderUserInfo.map((order) => {
    const dateString = new Date(order["create_at"]);
    const year = new Intl.DateTimeFormat("ko-KR", { year: "numeric" }).format(
      dateString
    );
    const month = new Intl.DateTimeFormat("ko-KR", { month: "2-digit" }).format(
      dateString
    );
    const day = new Intl.DateTimeFormat("ko-KR", { day: "2-digit" }).format(
      dateString
    );

    const koreanDate = `${year} ${month} ${day}`;
    order["create_at"] = koreanDate;
  });

  const onClcikCompleted = async (e) => {
    e.preventDefault();
    await axiosClient
      .put(`/orders/${e.target.id}`, { status: "배송완료" })
      .then((res) => {
        console.log(res);
        alert("Completed Update");
      })
      .catch((error) => console.log(error));
  };

  const onClickdelivery = (e) => {
    e.preventDefault();
  };
  return (
    <StrictMode>
      <OrderGetPresent
        ordersInfo={orderUserInfo}
        onClcikCompleted={onClcikCompleted}
        onClickdelivery={onClickdelivery}
      />
    </StrictMode>
  );
};

export default OrderGetContain;

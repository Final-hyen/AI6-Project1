import React, { StrictMode, useEffect, useState } from "react";
import { axiosClient } from "../../utils/axiosClient";
import OrderGetPresent from "./OrderInfoGetPresent";
import { ChangeDate } from "../../utils/ChangeDate";

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

  ChangeDate(orderUserInfo);
  
  const onClcikCompleted = async (e) => {
    e.preventDefault();
    await axiosClient
      .put(`/orders/${e.target.id}`, { status: "배송완료" })
      .then((res) => {
        alert("Completed Update");
      })
      .catch((error) => console.log(error));
  };

  const onClickdelivery = async (e) => {
    e.preventDefault();
    await axiosClient.put(`/orders/${e.target.id}`, { status : "배송중"})
      .then((res) => {
        alert("Completed Update")
      }).catch((error) => console.log(error))
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

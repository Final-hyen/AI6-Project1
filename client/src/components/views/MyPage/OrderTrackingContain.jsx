import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import TotalTrackingPresentation from "./TotalTrackingPresnt";
import { ChangeDate } from "../../../utils/ChangeDate";

const OrderTrackingContain = () => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axiosClient
      .get(`orders`)
      .then((res) => {
        setOrders(res.data.order);
      })
      .catch((err) => console.log(err));
  },[]);

  ChangeDate(orders);

  const clickOpenButton = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen)
  }
  return <TotalTrackingPresentation orders={orders} clickOpenButton={clickOpenButton} isOpen={isOpen}/>;
};

export default OrderTrackingContain;

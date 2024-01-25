import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import TotalTrackingPresentation from "./TotalTrackingPresnt";
import { ChangeDate } from "../../../utils/ChangeDate";

const OrderTrackingContain = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`orders`)
      .then((res) => {
        setOrders(res.data.order);
      })
      .catch((err) => console.log(err));
  },[]);
  ChangeDate(orders);
  console.log(orders)
  return <TotalTrackingPresentation orders={orders}/>;
};

export default OrderTrackingContain;

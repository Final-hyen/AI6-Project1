import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import TotalTrackingPresentation from "./TotalTrackingPresnt";

const OrderTrackingContain = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`orders`)
      .then((res) => {
        //console.log(res.data.order);
        setOrders(res.data.order);
      })
      .catch((err) => console.log(err));
  },[]);
  console.log(orders)
  return <TotalTrackingPresentation orders={orders}/>;
};

export default OrderTrackingContain;

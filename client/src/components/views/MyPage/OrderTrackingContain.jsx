import React, { useEffect, useState } from "react";
import OrderTrackingPresentation from "./OrderTrackingPresen";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../utils/axiosClient";

const OrderTrackingContain = () => {
  const [data, setData] = useState([]);
  const { id } = useParams;
  useEffect(() => {
    axiosClient
      .get("/orders")
      .then((res) => {
        console.log(typeof res.data.order[0].order_no);
        res.data.order.map((data) => {
          if (data.order_no === id) {
            setData(data);
          }
        });
      })
      .catch((err) => console.log(err));
  }, [data]);
  console.log(typeof id);
  return <OrderTrackingPresentation />;
};

export default OrderTrackingContain;

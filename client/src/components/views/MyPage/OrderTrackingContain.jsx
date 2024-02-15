import React, { useEffect, useState } from "react";
import OrderTrackingPresentation from "./OrderTrackingPresen";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../utils/axiosClient";

const OrderTrackingContain = () => {
  const [status, setStatus] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axiosClient
      .get("/orders")
      .then((res) => {
        const data = res.data.order.find(
          (data) => data.order_no === Number(id)
        );
        if (data) {
          setStatus(data.order_status);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <OrderTrackingPresentation status={status} />;
};

export default OrderTrackingContain;

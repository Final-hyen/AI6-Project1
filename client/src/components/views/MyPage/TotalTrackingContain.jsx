import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import TotalTrackingPresentation from "./TotalTrackingPresnt";
import { ChangeDate } from "../../../utils/ChangeDate";
import { useNavigate} from "react-router-dom";

const TotalTrackingContain = () => {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const clickTrackingButton = (e) => {
    e.preventDefault();
    navigate(`/ordertracking/${e.target.id}`)
  }
  return <TotalTrackingPresentation orders={orders} clickOpenButton={clickOpenButton} isOpen={isOpen} clickTrackingButton={clickTrackingButton}/>;
};

export default TotalTrackingContain;

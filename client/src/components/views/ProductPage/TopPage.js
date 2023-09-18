import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";

const GetTopProduct = () => {
  const [tops, setTops] = useState({});

  useEffect(() => {
    axiosClient.get("/products").then((res) => {
      if (res.data.category === "top") return setTops(res.data);
    }).catch(e => console.log(e));
  });
};

export default GetTopProduct
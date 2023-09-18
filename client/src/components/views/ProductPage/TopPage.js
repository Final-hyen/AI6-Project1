import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";

const GetTopProduct = () => {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setTops(res.data.filter((product) => product.category === "top"));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {tops.map((top, idx) => (
        <div key={idx}>
          <span>{top.title}</span>
        </div>
      ))}
    </div>
  );
};

export default GetTopProduct;

import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import ProductPresentation from "./ProductPresentation.jsx";

const TopProducts = () => {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setTops(res.data.filter((product) => product.category === "top"));
      })
      .catch((e) => console.log(e));
  }, []);

  return <ProductPresentation products={tops} />;
};

export default TopProducts;

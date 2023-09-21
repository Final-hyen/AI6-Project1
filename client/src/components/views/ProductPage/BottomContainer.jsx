import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import ProductPresentation from "./ProductPresentation.jsx";

const BottomProducts = () => {
  const [bottoms, setBottoms] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setBottoms(res.data.filter((product) => product.category === "bottom"));
      })
      .catch((e) => console.log(e));
  }, []);

  return <ProductPresentation products={bottoms} category="bottom" />;
};

export default BottomProducts;

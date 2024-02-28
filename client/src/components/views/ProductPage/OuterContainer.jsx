import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import ProductPresentation from "./ProductPresentation.jsx";

const OuterProduct = () => {
  const [outers, setOuters] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setOuters(res.data.filter((product) => product.category === "outer"));
      })
      .catch((e) => console.log(e));
  }, []);

  return <ProductPresentation products={outers} category={"Outer"} />;
};

export default OuterProduct;

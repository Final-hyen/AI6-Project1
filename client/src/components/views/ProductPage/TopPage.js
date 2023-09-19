import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import { Contain, Figure, Grid, Img } from "./ProductPageCSS";

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
    <Contain>
      <Grid>
        {tops.map((top, idx) => (
          <Figure key={idx}>
            <Img src={top.imgUrl} alt="제품 이미지" />
            <p>{top.company}</p>
            <p>{top.title}</p>
            <p>{top.price}</p>
          </Figure>
        ))}
      </Grid>
    </Contain>
  );
};

export default GetTopProduct;

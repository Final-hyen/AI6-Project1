import React, { useEffect, useState } from "react";
import { axiosClient } from "../../../utils/axiosClient";
import { Contain, Figure, Grid, Img } from "./ProductPageCSS";


const GetBottomProduct = () => {
  const [bottoms, setBottoms] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/products")
      .then((res) => {
        setBottoms(res.data.filter((product) => product.category === "bottom"));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Contain>
      <Grid>
        {bottoms.map((bottom, idx) => (
          <Figure key={idx}>
            <a href={`/detail/${bottom._id}`}>
              <Img src={bottom.imgUrl} alt="제품 이미지" />
              <p>{bottom.company}</p>
              <p>{bottom.title}</p>
              <p>{bottom.price}</p>
            </a>
          </Figure>
        ))}
      </Grid>
    </Contain>
  );
};

export default GetBottomProduct;
